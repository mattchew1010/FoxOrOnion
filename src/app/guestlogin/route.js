import { cookies } from "next/headers"
import { CreateUser } from "@/database/db"
import {redirect} from "next/navigation"


export async function GET() {
   try{
      const session = await CreateUser(null, "Guest_Password")
      cookies().set("session", session.uuid)
   }catch(err){
      console.log(err)
      return (<h1>ERROR: Failed to create guest account</h1>)
   }
   return redirect("/games")
}