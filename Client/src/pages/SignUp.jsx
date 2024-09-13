import React from "react";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className=" gap-5 flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* left*/}
      </div>
      <div className="flex-1">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            Abhishek's
          </span>
          Blog
        </Link>
        <p className="text-sm mt-5">
          This is a demo project. you can signup with your email and password.
        </p>
      </div>
      {/* right*/}
      <div className="flex-1">
        <form className="flex flex-col gap-4">
          <div>
            <Label value="Your username" />
            <Textinput type="text" placeholder="Username" id="username" />
          </div>
          <div>
            <Label value="Your email" />
            <Textinput type="text" placeholder="name@company.com" id="email" />
          </div>
          <div>
            <Label value="Your password" />
            <Textinput type="text" placeholder="Password" id="password" />
          </div>
          <Button gradientDuoTone='PurpletoPink' type='submit'>
            Sign Up
          </Button>
          <div className="flex gap-2 mt-2 text-sm">
            <span>Have an account</span>
            <Link to='/sign-in' className='text-blue-500'>
            Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
