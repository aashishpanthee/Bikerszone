import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const BikeRentSection = () => {
  const array = [
    {
      image: "../images/bikeimages/bike1.png",
      bikename: "BMW",
      priceperday: 2000,
    },
    {
      image: "../images/bikeimages/scooter3.jpg",
      bikename: "Dominar",
      priceperday: 2000,
    },
    {
      image: "../images/bikeimages/scooter1.png",
      bikename: "Dominar",
      priceperday: 2000,
    },
    {
      image: "../images/bikeimages/scooter2.jpg",
      bikename: "Dominar",
      priceperday: 2000,
    },
    {
      image: "../images/bikeimages/bike11.png",
      bikename: "Dominar",
      priceperday: 2000,
    },
    {
      image: "../images/bikeimages/bike12.png",
      bikename: "Dominar",
      priceperday: 2000,
    },
    {
      image: "../images/bikeimages/bike13.png",
      bikename: "Dominar",
      priceperday: 2000,
    },
    {
      image: "../images/bikeimages/bike14.png",
      bikename: "Dominar",
      priceperday: 2000,
    },
    {
      image: "../images/bikeimages/bike15.png",
      bikename: "Dominar",
      priceperday: 2000,
    },
    {
      image: "../images/bikeimages/bike2.png",
      bikename: "Dominar",
      priceperday: 2000,
    },
  ];
  return (
    <>
      <Navbar />
      <section class='text-gray-600 body-font'>
        <div class='container px-5  mx-auto'>
          <div class='flex flex-wrap -m-4'>
            {array.map((bike) => (
              <div class='lg:w-1/4 md:w-1/2 p-4 w-full'>
                <div class='block relative h-50 rounded overflow-hidden'>
                  <img
                    alt='ecommerce'
                    class='object-cover object-center w-full h-full'
                    src={bike.image}
                  />
                </div>
                <div class='mt-4'>
                  <h2 class='text-gray-900 title-font text-lg font-medium'>
                    {bike.bikename}
                  </h2>
                  <p class='mt-1'>{bike.priceperday}</p>
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
