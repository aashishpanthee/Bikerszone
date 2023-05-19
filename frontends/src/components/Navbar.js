import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Rent Bikes", href: "/bikerentsection" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const navigate = useNavigate();
  const handleClick = (item) => {
    if (item == false) {
    }
    navigate("/contact");
  };
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
