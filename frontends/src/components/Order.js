import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Formik, ErrorMessage } from "formik";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBikeById } from "../redux/features/Bikes/bikeAction";
import { useParams } from "react-router-dom";
import Spinner from "../Helper/Spinner";
import { AddOrder } from "../redux/features/Order/orderAction";
const base_url = "http://localhost:8000/";
const Order = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [days, setDays] = useState(1);
  useEffect(() => {
    dispatch(getBikeById(id));
  }, [id]);
  const { loading, success, error, bikeById } = useSelector(
    (state) => state.bike
  );
  const perDayPrice = bikeById ? bikeById.pricePerDay : 0;
  const handleIncrement = () => {
    setDays(days + 1);
  };

  const handleDecrement = () => {
    if (days > 1) {
      setDays(days - 1);
    }
  };
  const totalAmt = perDayPrice * days;
  const handleOrder = async () => {
    const formData = {
      totalAmt: totalAmt,
      days: days,
      bikeId: bikeById.id,
    };
    await dispatch(AddOrder(formData));
  };
  useEffect(() => {
    if (success) {
      navigate("/");
    }
  }, [success]);
  return (
    <>
      {bikeById ? (
        <>
          <Navbar />
          <section class='text-gray-600 body-font overflow-hidden'>
            <div class='container px-5 py-10 mx-auto'>
              <div class='lg:w-4/5 mx-auto flex flex-wrap'>
                <img
                  alt={bikeById.bikeName}
                  className='object-cover object-center w-full h-48 rounded lg:w-1/2 lg:h-auto'
                  src={`${base_url}${bikeById.image}`}
                />
                <div class='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
                  <h2 class='text-sm title-font text-gray-500 tracking-widest'>
                    Rent Now !!!
                  </h2>
                  <h1 class='text-gray-900 text-3xl title-font font-medium mb-1'>
                    {bikeById.bikeName}
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
                  {/* <p class='leading-relaxed'>
                    The Pulsar 220 is a flagship model from Bajaj Auto is a
                    sporty, muscular-looking motorcycle. It has a five-speed
                    gearbox that offers smooth gear shifts. The bike also offers
                    good fuel efficiency, making it practical for longer
                    journeys.The bike also features front and rear disc brakes,
                    ensuring efficient braking performance.
                  </p> */}

                  <div className='flex py-3 text-xl font-semibold'>
                    <span class='mr-3 text-gray-900'>Days :</span>
                    <button onClick={handleDecrement} className='px-3'>
                      -
                    </button>
                    <div className='px-3'>{days}</div>
                    <button onClick={handleIncrement} className='px-3'>
                      +
                    </button>
                  </div>
                  {/*  */}
                  <div class='flex items-center'>
                    <span className='text-xl font-medium text-gray-900 title-font'>
                      Price :
                    </span>
                    <span
                      class='title-font  ml-2 font-medium text-xl'
                      name='totalAmt'
                    >
                      Rs {totalAmt}
                    </span>
                    <button
                      type='submit'
                      class='flex ml-auto text-white bg-orange border-0 py-2 px-6 focus:outline-none hover:bg-black rounded'
                      onClick={handleOrder}
                    >
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Order;
