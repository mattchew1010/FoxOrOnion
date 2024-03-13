import { cookies } from "next/headers"
import { redirect } from "next/navigation"

import { CheckCredentials } from "@/app/login/page"
import {Login} from "@components/account/login"

export default function Game({params}) {
   if (!cookies().get("session")) {
      return (<Login title={"Please Login To Continue"} submit={CheckCredentials}/>)
   }
   if (params.game === "classic") {
      return (
         <div>
            <h1>Classic Game, Logged in</h1>
         </div>
      )
   }
}