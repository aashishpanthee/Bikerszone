import React, { useState } from "react";
import Navbar from "./Navbar";

const Order = () => {
  const [selectedDay, setSelectedDay] = useState("1");
  const dayPrices = {
    1: 2000,
    2: 4000,
    3: 6000,
    4: 8000,
    5: 10000,
  };

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const price = dayPrices[selectedDay];
  console.log(price);
  return (
    <>
      <Navbar />
      <section class='text-gray-600 body-font overflow-hidden'>
        <div class='container px-5 py-10 mx-auto'>
          <div class='lg:w-4/5 mx-auto flex flex-wrap'>
            <img
              alt='ecommerce'
              class='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded'
              src='../images/bikeimages/bike2.png'
            />
            <div class='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
              <h2 class='text-sm title-font text-gray-500 tracking-widest'>
                Rent Now !!!
              </h2>
              <h1 class='text-gray-900 text-3xl title-font font-medium mb-1'>
                Pulsar 220
              </h1>
              <div class='flex mb-4'>
                <span class='flex items-center'>
                  <svg
                    fill='currentColor'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-4 h-4 text-orange'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <svg
                    fill='currentColor'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-4 h-4 text-orange'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <svg
                    fill='currentColor'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-4 h-4 text-orange'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <svg
                    fill='currentColor'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-4 h-4 text-orange'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-4 h-4 text-orange'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <span class='text-gray-600 ml-3'>4 Reviews</span>
                </span>
              </div>
              <p class='leading-relaxed'>
                The Pulsar 220 is a flagship model from Bajaj Auto is a sporty,
                muscular-looking motorcycle. It has a five-speed gearbox that
                offers smooth gear shifts. The bike also offers good fuel
                efficiency, making it practical for longer journeys.The bike
                also features front and rear disc brakes, ensuring efficient
                braking performance.
              </p>
              <div class='flex mt-2 items-center pb-5 border-b-2 border-gray-100 mb-5'>
                <span class=''>Mileage: </span>
                <span className='ml-2'> 35-50km</span>
                <div class='flex ml-3 items-center'>
                  <span class='mr-3'>Days</span>
                  <div class='relative'>
                    <select
                      class='rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10'
                      value={selectedDay}
                      onChange={handleDayChange}
                    >
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                    </select>
                    <span class='absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        class='w-4 h-4'
                        viewBox='0 0 24 24'
                      >
                        <path d='M6 9l6 6 6-6'></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div class='flex'>
                <span className='text-2xl font-medium text-gray-900 title-font'>
                  Price:
                </span>
                <span class='title-font  ml-2 font-medium text-2xl text-gray-900'>
                  NPR {price}
                </span>
                <button class='flex ml-auto text-white bg-orange border-0 py-2 px-6 focus:outline-none hover:bg-black rounded'>
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;
