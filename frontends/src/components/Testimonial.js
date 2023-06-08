import React from "react";
import { Carousel } from "antd";
const Testimonial = () => {
  const array = [
    {
      name: "Sumit Jung Chhetri",
      review:
        " The process of renting the vehicle was smooth and straightforward without any implicit condition.",
      image: "../images/testimonials/sumit.jpg",
    },
    {
      name: "Prawjal Bhandari",
      review:
        "Your company's ability to accommodate individual requirements is commendable.",
      image: "../images/testimonials/prawjal.jpg",
    },

    {
      name: "Ashish Aryal",
      review:
        "The bikes themselves were in top-notch condition. I felt safe and comfortable riding them throughout my trip.",
      image: "../images/testimonials/aryal.jpg",
    },
    {
      name: "Sandesh Chhetri",
      review:
        "The bike was clean, well-maintained, and performed flawlessly throughout my rental period.",
      image: "../images/testimonials/sandesh.jpg",
    },
    {
      name: " Sagar Thapa Chhetri",
      review:
        " I've tried various bike rental services, but this one is by far the best. The bikes are always in excellent condition.",
      image: "../images/testimonials/sagar.jpg",
    },
    {
      name: "Prem Gautam",
      review:
        "I felt confident and safe riding it, knowing that it had been properly maintained and serviced.",
      image: "../images/testimonials/prem.jpg",
    },

    {
      name: "Dhiraj Neupane",
      review:
        "I would highly recommend it to anyone looking for a fun and engaging way to explore a new city.",
      image: "../images/testimonials/dhiraj.jpg",
    },
    {
      name: "Sujan Shrestha",
      review:
        "In terms of comfort and safety,the bike I used was in good condition.",
      image: "../images/testimonials/sujan.jpg",
    },
  ];
  return (
    <section class='text-gray-600 body-font'>
      <div class='container px-5 py-8 mx-auto'>
        <h2 className='flex justify-center w-full mb-8 text-xl font-medium tracking-tight sm:text-3xl sm:font-extralarge text-slate-900 md:mb-10 sm:text-center'>
          Our Testimonials
        </h2>
        <div className='flex-col w-full gap-2 sm:flex sm:flex-row'>
          <Carousel
            autoplay={true}
            dotPosition='top'
            className='m-auto sm:w-[26rem] w-[20rem] '
          >
            {array.map((array) => {
              return (
                <div className='px-2 py-6 mb-6 border-2 rounded-md sm:px-3 sm:gap-2 lg:w-1/3 lg:mb-0'>
                  <div class='h-full text-center flex justify-center flex-col items-center'>
                    <img
                      alt='testimonial'
                      class='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
                      src={array.image}
                    />
                    <p class='leading-relaxed'>{array.review}</p>
                    <span class='inline-block h-1 w-10 rounded bg-orange mt-6 mb-4'></span>
                    <h2 class='text-gray-900 font-medium title-font tracking-wider text-sm'>
                      {array.name}
                    </h2>
                  </div>
                </div>
              );
            })}
          </Carousel>
          <Carousel
            autoplay={true}
            dotPosition='left'
            className='m-auto sm:w-[26rem] w-[20rem]'
          >
            {array.map((array) => {
              return (
                <div className='gap-2 px-3 py-6 mb-6 border-2 rounded-md lg:w-1/3 lg:mb-0'>
                  <div class='h-full text-center flex justify-center flex-col items-center'>
                    <img
                      alt='testimonial'
                      class='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
                      src={array.image}
                    />
                    <p class='leading-relaxed'>{array.review}</p>
                    <span class='inline-block h-1 w-10 rounded bg-orange mt-6 mb-4'></span>
                    <h2 class='text-gray-900 font-medium title-font tracking-wider text-sm'>
                      {array.name}
                    </h2>
                  </div>
                </div>
              );
            })}
          </Carousel>
          <Carousel
            autoplay={true}
            dotPosition='buttom'
            className='m-auto sm:w-[26rem] w-[20rem]'
          >
            {array.map((array) => {
              return (
                <div className='gap-2 px-3 py-6 mb-6 border-2 rounded-md lg:w-1/3 lg:mb-0'>
                  <div class='h-full text-center flex justify-center flex-col items-center'>
                    <img
                      alt='testimonial'
                      class='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
                      src={array.image}
                    />
                    <p class='leading-relaxed'>{array.review}</p>
                    <span class='inline-block h-1 w-10 rounded bg-orange mt-6 mb-4'></span>
                    <h2 class='text-gray-900 font-medium title-font tracking-wider text-sm'>
                      {array.name}
                    </h2>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
