"use server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

import { CheckCredentials } from "@/app/login/page"
import {Login} from "@components/account/login"

import {getUserFromSession} from "@database/db"

import { submitClassicAnswer, getRound } from "@/components/games/classic_server"
import { GameComponent } from "@/components/games/classic"

export async function submitClassicAnswerFormAction(uuid, article) {
//^ we do this to avoid passing the user id to the client. Its not explicitly a security issue but its a good habit
   
   return async function (prev, formData) {
      "use server"
      
      try{
         console.log(prev, (prev != undefined ? prev.article.uuid : article.uuid))
         const response = await submitClassicAnswer(uuid, (prev != undefined ? prev.article.uuid : article.uuid), (formData === "real" ? true : false))
         if (response.success) {
            console.log(response)
            return {article: response.article, previousAnswer: response.round.correct}
         }
      }catch (error) {
         //todo: show error to user
         console.warn(error)
      }
   }
}

export default async function Game({params}) {
   if (!cookies().get("session")) {
      return (<Login title={"Please Login To Continue"} submit={CheckCredentials}/>)
   }
   if (params.game === "classic") {
      //get user from session
      var user
      try {
         user = await getUserFromSession(cookies().get("session").value)
      } catch (error) {
         if (error === "Session not found") {
            return (<Login title={"Please Login To Continue"} submit={CheckCredentials} initialFormState="Internal error: Session not found"/>)
         }else if (error === "User not found") {
            return (<Login title={"Please Login To Continue"} submit={CheckCredentials} initialFormState="Internal error: User not found"/>)
         }
      }
      //start game
      var round = await getRound()
      if (round.success){
         //render game
         return (<GameComponent articleTitle={round.article.title} articleID={round.article.uuid} submit={await submitClassicAnswerFormAction(user.uuid, round.article)}/>)

      }else{
         return (<h1 className="text-red-600">Internal Error: Could not start game</h1>)
      }
   }
}