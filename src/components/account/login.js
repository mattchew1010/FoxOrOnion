"use client"
import {useState} from "react"
import {useFormState} from "react-dom"

export function Login({title, submit, initialFormState = null, submitGuestLogin}) {
   const [state, formAction] = useFormState(submit, initialFormState)

   const [valid, setValid] = useState(true)
   function validate(e) {
      console.log(e)
      const email = document.getElementById("email").value
      const password = document.getElementById("password").value
      console.log(email, password)
      if (email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/) && password.length > 7) {
         setValid(true)
      } else {
         setValid(false)
      }
   }

   return(
   <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">{title || "Login"}</h1>
        <p className="text-sm text-red-500 text-center pt-3">{state}</p>
        <div className="bg-secondary shadow w-full rounded-lg divide-y">
          <div className="px-4 py-3">
            <form onChange={validate} action={formAction}>
                <label className="font-semibold text-sm text-white pb-1 block">E-mail</label>
                <input className="bg-textbox border border-textbox-border rounded-lg px-3 py-1 mt-1 mb-5 text-base w-full outline-none ring-0 ring-white focus:ring-2" id="email" type="email" name="email"/>
                <label className="font-semibold text-sm text-white pb-1 block">Password</label>
                <input className="bg-textbox border border-textbox-border rounded-lg px-3 py-1 mt-1 mb-0 text-base w-full outline-none ring-0 ring-white focus:ring-2" id="password" type="password" name="password"/>
                <button data-umami-event="Login Request" disabled={!valid} type="submit" className="disabled:bg-[#FF8A80] disabled:text-[#141414] disabled:hover:bg-red-500 mt-6 transition duration-200 bg-blue-500 hover:bg-blue-600 rounded-lg w-full py-2 text-white" >
                  Login
                </button>
               <label className="text-xs text-gray-400 pl-1">Need an account? <a href="/" className="text-blue-500 hover:text-blue-400">Sign up</a></label>
              </form>
              <div className="relative flex py-5 items-center">
                  <div className="flex-grow border-t border-gray-400"></div>
                  <span className="flex-shrink mx-4 text-gray-400">Or</span>
                  <div className="flex-grow border-t border-gray-400"></div>
               </div>
               <button data-umami-event="Guest login" onClick={() => submitGuestLogin()} type="submit" className="transition duration-200 bg-textbox hover:bg-textbox-border rounded-lg w-full py-2 text-white">
                  Continue as guest
                </button>
          </div>
        </div>
        <p className="text-center text-gray-400 text-xs pt-3">By continuing, you agree to our <a href="/user-agreement" className="text-blue-500 hover:text-blue-400">User Agreement</a> and <a href="/privacy" className="text-blue-500 hover:text-blue-400">Privacy Policy</a>.</p>
      </div>
   )
}