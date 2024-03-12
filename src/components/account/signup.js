export default function Signup(submitSignupForm, guestLogin) {
   return(
   <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">Welcome to News Or Satire</h1>
        <div className="bg-secondary shadow w-full rounded-lg divide-y">
          <div className="px-4 py-3">
            <form submit={submitSignupForm}>
              <label className="font-semibold text-sm text-white pb-1 block">E-mail</label>
                <input type="email" className="bg-textbox border border-textbox-border rounded-lg px-3 py-1 mt-1 mb-5 text-base w-full outline-none ring-0 ring-white focus:ring-2" />
                <label className="font-semibold text-sm text-white pb-1 block">Password</label>
                <input type="password" className="bg-textbox border border-textbox-border rounded-lg px-3 py-1 mt-1 mb-0 text-base w-full outline-none ring-0 ring-white focus:ring-2" />
                <label className="text-xs text-gray-400 pl-1">Must have at least 8 characters</label>
                <button type="submit" className="mt-6 transition duration-200 bg-blue-500 hover:bg-blue-600 rounded-lg w-full py-2 text-white">
                  Sign up
                </button>
               <label className="text-xs text-gray-400 pl-1">Already have an account? <a href="/login" className="text-blue-500 hover:text-blue-400">Login</a></label>
              </form>
              <div class="relative flex py-5 items-center">
                  <div class="flex-grow border-t border-gray-400"></div>
                  <span class="flex-shrink mx-4 text-gray-400">Or</span>
                  <div class="flex-grow border-t border-gray-400"></div>
               </div>
               <form submit={guestLogin}>
                  <button type="submit" className="transition duration-200 bg-textbox hover:bg-textbox-border rounded-lg w-full py-2 text-white">
                    Continue as guest
                  </button>
               </form>
          </div>
        </div>
      </div>
   )
}