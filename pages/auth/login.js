function Login() {
  return ( 
    <div class="flex h-screen">
      <div class="max-w-xs w-full m-auto bg-indigo-200 bg-opacity-90 dark:bg-indigo-100 rounded p-5">   
      <header>
        <h1 className="mx-auto mb-5 text-indigo-900 text-2xl text-center">
          Dashboard
        </h1>
      </header>
      <form>
        <div>
          <label class="block mb-2 text-indigo-500" forHtml="username">Username</label>
          <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-100" type="text" name="username" autocomplete="off" />
        </div>
        <div>
          <label class="block mb-2 text-indigo-500" forHtml="password">Password</label>
          <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-100" type="password" name="password" autocomplete="off" />
        </div>
        <div>          
          <input class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit" autocomplete="off" />
        </div>       
      </form>
      <footer>
        <a class="text-indigo-700 hover:text-pink-700 text-sm float-left" href="#">Forgot Password?</a>
        <a class="text-indigo-700 hover:text-pink-700 text-sm float-right" href="#">Create Account</a>
      </footer> 
      </div>
    </div>
   );
}

export default Login;