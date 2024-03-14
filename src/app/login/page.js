"use server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import {Login} from "@components/account/login"
import {userAuth} from "@/database/db.js"

export async function CheckCredentials(previousState, formData) {
   const email = formData.get("email")
   const password = formData.get("password")
   if (email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/) && password.length > 7) {
      try {
         var session = await userAuth(email, password)
         cookies().set("session", session.uuid)
      }catch(error) {
         console.log(error)
         if (error === "User not found") {
            return "User not found"
         } else if (error === "Invalid Password") {
            return "Invalid Password"
         } else {
            return "Internal server error, Please try again later."
         }
      }
      return redirect("/games")
   } else {
      return false
   }
}

export default async function LoginPage() {
   if (!cookies().get("session")) {
      return (<Login title={"Please Login To Continue"} submit={CheckCredentials}/>)
   } else {
      return redirect("/games")
   }
}