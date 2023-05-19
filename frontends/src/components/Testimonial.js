import React from "react";

const Testimonial = () => {
  const array = [
    {
      name: "Sumit Jung Chhetri",
      review:
        " The process of renting the vehicle was smooth and straightforward without any implicit condition.",
      image: "../images/testimonials/sumit.jpg",
    },
    {
      name: "Ashish Aryal",
      review:
        "The bikes themselves were in top-notch condition. I felt safe and comfortable riding them throughout my trip.",
      image: "../images/testimonials/aryal.jpg",
    },
    {
      name: " Sagar Thapa Chhetri",
      review:
        " I've tried various bike rental services, but this one is by far the best. The bikes are always in excellent condition.",
      image: "../images/testimonials/sagar.jpg",
    },
  ];
  return (
    <section class='text-gray-600 body-font'>
      <div class='container px-5 py-8 mx-auto'>
        <h2 className='flex justify-center w-full mb-8 text-xl font-medium tracking-tight sm:text-3xl sm:font-extralarge text-slate-900 md:mb-10 sm:text-center'>
          Our Testimonials
        </h2>
        <div class='flex flex-wrap -m-4 '>
          {array.map((array) => {
            return (
              <div class='lg:w-1/3 lg:mb-0 mb-6 py-6 px-3 border-2 rounded-md gap-2'>
                <div class='h-full text-center'>
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
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
