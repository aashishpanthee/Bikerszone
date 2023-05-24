import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import bootstrapImage from "../../../assets/img/angular.jpg";
const ViewService = () => {
  return (
    <div className='relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-100'>
      <div className='px-6 py-6 mb-0 bg-white rounded-t'>
        <form>
          <div className='flex justify-between'>
            <Link
              to='/admin/service'
              className='px-4 py-2 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-red-400 rounded shadow outline-none active:bg-red-600 hover:shadow-md focus:outline-none'
              type='button'
            >
              Back
            </Link>
          </div>
          <h6 className='mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400'>
            Service Information
          </h6>
          <div className='flex flex-wrap'>
            <div className='flex justify-between w-full px-4 lg:w-6/12'>
              <div className='relative w-full mb-3'>
                <label
                  className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                  htmlFor='grid-password'
                >
                  Service Name
                </label>
                <p className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'>
                  Argon Design System
                </p>
              </div>
            </div>
            <div className='flex justify-between w-full px-4 lg:w-6/12'>
              <div className='relative w-full mb-3'>
                <label
                  htmlFor=''
                  className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                >
                  Image
                </label>
                <img
                  src={bootstrapImage}
                  alt='...'
                  className='w-12 h-12 bg-white border rounded-full'
                />
              </div>
            </div>
            <div className='w-full px-4 lg:w-6/12'>
              <div className='relative w-full mb-3 '>
                <label
                  className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                  htmlFor='grid-password'
                >
                  Features
                </label>
                <p className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'>
                  Designing Clothes
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ViewService;
