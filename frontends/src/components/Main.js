import React from "react";

const Main = () => {
  return (
    <section className='py-3 text-center bg-teal-50 h-1/2'>
      <h3 className='mt-2 text-2xl antialiased font-semibold sm:font-extrabold sm:text-6xl sm:pt-10 text-slate-900 sm:mt-4'>
        Rent a Bike
      </h3>
      <img src='../images/Home.png' alt='' className='h-full' />
      <button className='px-2 py-1 mt-2 text-white rounded bg-orange sm:font-semibold sm:py-2 sm:px-4 hover:bg-black sm:mt-4'>
        Bike Showcase
      </button>
    </section>
  );
};

export default Main;
