import Contact from "./Contact";
function SignUp(){
    return(
        <>
<section class="flex justify-center mt-2 lg:mt-4 items-center w-full">
  
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white dark:border-green-600">
          <div class="p-4 lg:p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-sm  font-bold leading-tight tracking-tight text-gray-900 lg:text-2xl dark:text-green-600">
              Create an account
              </h1>
              <form class="space-y-4 lg:space-y-6" action="#">
              <div>
                      <label for="username" class="block mb-2 text-sm font-medium text-green-600 dark:text-green-800">username</label>
                      <input type="username" name="username" id="username" class="bg-gray-50 border border-white text-white    rounded-lg focus:ring-white focus:border-white block w-full p-1.5 lg:p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-white dark:text-white dark:focus:ring-green-700 dark:focus:border-green-700" placeholder="Name" required="">
                      </input>
             </div>    
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-green-600 dark:text-green-800">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-white text-white    rounded-lg focus:ring-white focus:border-white block w-full p-1.5 lg:p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-white dark:text-white dark:focus:ring-green-700 dark:focus:border-green-700" placeholder="name@company.com" required="">
                      </input> </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-green-600 dark:text-green-800">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-white border border-gray-300 text-white rounded-lg focus:ring-white focus:border-white block w-full p-1.5 lg:p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-white dark:text-white dark:focus:ring-green-700 dark:focus:border-green-700" required="">
                      </input></div>
                      <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-green-600 dark:text-green-800">Confirm password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-white border border-gray-300 text-white rounded-lg focus:ring-white focus:border-white block w-full p-1.5 lg:p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-white dark:text-white dark:focus:ring-green-700 dark:focus:border-green-700" required="">
                      </input></div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-green-700 rounded bg-green-700 focus:ring-3 focus:ring-green-700 dark:bg-green-700 dark:border-green-700 dark:focus:ring-green-700 dark:ring-offset-green-700" required="">
                            </input></div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-text-green-600 dark:text-green-800 ">Remember me</label>
                          </div>
                      </div>
                  </div>
                  <button 
  type="submit" 
  class="w-full text-green-700 bg-white border border-green-700 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-600 font-medium rounded-lg text-sm px-5 p-1.5 py-1.5 lg:py-2.5 text-center dark:focus:ring-green-700"
>
  Sign Up
</button>
                 
              </form>
          </div>
      </div>
      
</section>
<Contact/>
 </>
    )
}
export default SignUp;
