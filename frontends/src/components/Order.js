import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { DatePicker } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBikeById } from "../redux/features/Bikes/bikeAction";
import { useParams } from "react-router-dom";
import Spinner from "../Helper/Spinner";
import { AddOrder } from "../redux/features/Order/orderAction";
import { clearFields } from "../redux/features/Order/orderSlice";
const base_url = "http://localhost:8000/";
const { RangePicker } = DatePicker;
const Order = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [days, setDays] = useState(0);
  const [totalamount, setTotalAmount] = useState(0);

  const { bikeById } = useSelector((state) => state.bike);
  const { loading, success } = useSelector((state) => state.order);
  useEffect(() => {
    dispatch(getBikeById(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (success) {
      navigate("/");
      console.log("success");
    }
  }, [success, navigate]);
  const handleOrder = async () => {
    const formData = {
      totalAmt: totalamount,
      startDate: from,
      endDate: to,
      bikeId: bikeById.id,
    };
    await dispatch(AddOrder(formData));
    await dispatch(clearFields());
  };
  const selectTimeSlots = (values) => {
    let a = values[0];
    let b = values[1].toDate();
    setFrom(a);
    setTo(b);
    setDays(values[1].diff(values[0], "days"));
  };

  useEffect(() => {
    if (bikeById) {
      setTotalAmount(days * bikeById.pricePerDay);
    }
  }, [days, bikeById]);
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
                  <h1 class='text-gray-900 text-xl  font-normal mb-1'>
                    Rent per day :<span> Rs {bikeById.pricePerDay}</span>
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
                  <RangePicker
                    format='DD MMMM YYYY'
                    onChange={selectTimeSlots}
                    className='mb-2'
                  />
                  {/*  */}
                  <div className='font-semibold'>Total Days: {days}</div>
                  <div class='flex items-center'>
                    <span className='text-xl font-medium text-gray-900 title-font'>
                      Price :
                    </span>
                    <span
                      class='title-font  ml-2 font-medium text-xl'
                      name='totalAmt'
                    >
                      Rs {totalamount}
                    </span>
                    <button
                      type='submit'
                      class='flex ml-auto text-white bg-orange border-0 py-2 px-6 focus:outline-none hover:bg-black rounded'
                      disabled={!to && !from}
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
