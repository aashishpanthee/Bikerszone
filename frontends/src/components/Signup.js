import React from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className='flex flex-col justify-center h-screen px-6 py-12 lg:px-8 bg-slate-50'>
      <div className='mt-5 sm:mx-auto sm:w-full sm:max-w-sm'>
        <Link to='/'>
          <img
            className='w-auto h-10 mx-auto'
            src='../images/navbarlogo.png'
            alt='Your Company'
          />
        </Link>
        <h2 className='mt-5 text-2xl font-bold leading-9 tracking-tight text-center text-slate-900'>
          Sign up for your account
        </h2>
      </div>

      <div className='mt-5 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-3' action='#' method='POST'>
          <div className='flex flex-col'>
            <div className='flex'></div>
            <div className='flex'></div>
          </div>
          <div>
            <label
              for='fullname'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Fullname
            </label>
            <div className='mt-2'>
              <input
                id='fullname'
                name='fullname'
                type='text'
                autocomplete='fullname'
                required
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div>
            <label
              for='email'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Email address
            </label>
            <div className='mt-2'>
              <input
                id='email'
                name='email'
                type='email'
                autocomplete='email'
                required
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div>
            <label
              for='password'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Password
            </label>
            <div className='mt-2'>
              <input
                id='password'
                name='password'
                type='password'
                autocomplete='password'
                required
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div>
            <label
              for='confirmPassword'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Confirm Password
            </label>
            <div className='mt-2'>
              <input
                id='confirmPassword'
                name='confirmPassword'
                type='text'
                autocomplete='confirmPassword'
                required
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-orange px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Sign in
            </button>
          </div>
        </form>

        <p class='mt-3 text-center text-sm text-gray-500'>
          <Link to='/login' className='font-semibold leading-6 text-slate-900 '>
            Have an account ? <span className='text-orange'>Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
