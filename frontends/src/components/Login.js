import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Helper/Spinner";
import Error from "../Helper/Error";
import { userLogin } from "../redux/features/User/authAction";
import { clearFields } from "../redux/features/User/authSlice";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, userInfo, error } = useSelector((state) => state.auth);
  const onSubmit = async (event) => {
    if (!email || !password) {
      toast.error("Invalid credintals");
    }
    const data = {
      email: email,
      password: password,
    };
    await dispatch(userLogin(data));
    await dispatch(clearFields());
  };
  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo]);
  return (
    <>
      <Navbar />
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
            Sign in to your account
          </h2>
        </div>

        <div className='mt-5 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6'>
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
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  for='password'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Password
                </label>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autocomplete='current-password'
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
              <div class='text-sm text-right mt-1'>
                <a href='#' className='font-semibold text-slate-900 '>
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex justify-center w-full px-3 py-1.5 text-sm font-semibold leading-6 text-white rounded-md shadow-sm bg-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                onClick={(event) => onSubmit(event)}
                disabled={loading}
              >
                {loading ? <Spinner /> : "Login"}
              </button>
            </div>
            {error && toast.error("Invalid Credentials")}
          </form>

          <p class='mt-3 text-center text-sm text-gray-500'>
            <Link
              to='/signup'
              className='font-semibold leading-6 text-slate-900 '
            >
              Don't have an account ?
              <span className='text-orange'> Sign up</span>
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
