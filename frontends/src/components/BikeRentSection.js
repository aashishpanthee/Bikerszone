import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import { BikeAll } from "../redux/features/Bikes/bikeAction";

const BikeRentSection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(BikeAll());
  }, []);
  const { loading, bikes, error } = useSelector((state) => state.bike);
  const base_url = "http://localhost:8000/";

  return (
    <>
      <Navbar />
      <section class='text-gray-600 body-font'>
        <div class='container px-5  mx-auto'>
          <div class='flex flex-wrap -m-4'>
            {bikes &&
              bikes.length !== 0 &&
              bikes.map((bike) => (
                <div class='lg:w-1/4 md:w-1/2 p-4 w-full'>
                  <div class='block relative h-50 rounded overflow-hidden'>
                    {bike.image && (
                      <img
                        alt='ecommerce'
                        class='object-cover object-center w-full h-full'
                        src={`${base_url}${bike.image}`}
                      />
                    )}
                  </div>
                  <div class='mt-4'>
                    <h2 class='text-gray-900 title-font text-lg font-medium'>
                      {bike.bikeName}
                    </h2>
                    <p class='mt-1'>{bike.pricePerDay}</p>
                  </div>
                  <Link
                    class='text-indigo-500 inline-flex items-center mt-1'
                    to='/order'
                  >
                    Enquire Now
                    <svg
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      class='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'
                    >
                      <path d='M5 12h14M12 5l7 7-7 7'></path>
                    </svg>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BikeRentSection;
