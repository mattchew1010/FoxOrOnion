"use server"
import {Signup} from "@/components/account/signup.js"
import { CreateUser } from "@/database/db.js"
import {z} from "zod"
import { redirect } from 'next/navigation'

const SignupFormSchema = z.object({
  email: z.string({invalid_type_error: "Invalid Email"}).email(),
  password: z.string({invalid_type_error: "Invalid Password"}).min(8),
  username: z.string({invalid_type_error: "Invalid Username"}).max(32)
}).partial({username: true})

export async function signupAction(formData) {
  const email = formData.get("email")
  const password = formData.get("password")
  const validate = SignupFormSchema.safeParse({email: email, password: password})
  //todo: form server errors
  if (validate.success === false) {
    return {
      status: 400,
      error: validate.error.issues
    }
  }

  try {
    await CreateUser(email, password)
  } catch (error) {
    console.log(error)
    return {
      status: 500,
      error: "Internal server error, Please try again later."
    }
  }
  return redirect("/games")//todo: cookies
}

export default async function Home() {
  return (
    <div>
      <Signup submitSignupForm={signupAction}/>
    </div>
  )
}
