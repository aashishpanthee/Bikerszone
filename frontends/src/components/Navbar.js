import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { Fragment, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { clearFields } from "../redux/features/User/authSlice";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Rent Bikes", href: "/bikerentsection" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, userInfo, error } = useSelector((state) => state.auth);
  const usertokn = localStorage.getItem("userToken")
    ? localStorage.getItem("userToken")
    : null;
  const data = usertokn ? jwtDecode(usertokn) : null;
  console.log(data);
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    window.location.href = "/";
  };
  // useEffect(() => {
  //   if (!usertokn) {
  //     window.location.href = "/";
  //   }
  // }, [usertokn]);
  return (
    <Disclosure as='nav' className='bg-slate-50'>
      {({ open }) => (
        <>
          <div className='px-2 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block w-6 h-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block w-6 h-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex items-center justify-center flex-1 sm:items-stretch sm:justify-start'>
                <Link className='flex items-center flex-shrink-0' to='/'>
                  <img
                    className='block w-auto h-8 lg:hidden'
                    src='../images/navbarlogo.png'
                    alt='Your Company'
                  />
                  <img
                    className='hidden w-auto h-8 lg:block'
                    src='../images/navbarlogo.png'
                    alt='Your Company'
                  />
                </Link>
                <div className='hidden sm:flex sm:ml-6'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        className={classNames(
                          "text-black hover:bg-black hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {usertokn !== undefined && usertokn !== null ? (
                <div className='text-right'>
                  <Menu as='div' className=' text-left'>
                    <div>
                      <Menu.Button className='inline-flex w-full justify-center rounded-md px-4 py-2 font-medium text-base text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                        {data.user}
                        <ChevronDownIcon
                          className='ml-2 -mr-1 h-5 w-5 text-slate-900 '
                          aria-hidden='true'
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-300 rounded-md bg-gray-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <div className='px-1 py-1 '>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-violet-500 text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                Edit Profile
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-violet-500 text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                Your Cart
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                        <div className='px-1 py-1'>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={handleLogout}
                                className={`${
                                  active
                                    ? "bg-violet-500 text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                Logout
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              ) : (
                <div className='space-x-2'>
                  <Link
                    className='px-3 py-2 text-sm font-medium text-black rounded-md hover:bg-black hover:text-white'
                    to='/login'
                  >
                    Login
                  </Link>
                  <Link
                    className='px-3 py-2 text-sm font-medium text-white rounded-md text-gray-1 00 bg-orange hover:bg-black'
                    to='/signup'
                  >
                    Sign up
                  </Link>
                </div>
              )}

              {/*  */}
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-700 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
