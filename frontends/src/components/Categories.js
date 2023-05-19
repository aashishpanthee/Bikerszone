import React from "react";

const Categories = () => {
  const array = [
    {
      name: "Economuter bikes",
      images: "../images/economuter/pulsar.png",
    },
    {
      name: "Sport bikes",
      images: "../images/sports/sport2.png",
    },
    {
      name: "Scooter",
      images: "../images/scooter/vespaa.png",
    },
  ];
  return (
    <section class='text-gray-600 body-font'>
      <div class='container px-5 md:py-20 py-15 mx-auto'>
        <div class='flex flex-col'>
          <div class='h-1 bg-gray-200 rounded overflow-hidden'>
            <div class='w-24 h-full bg-indigo-500'></div>
          </div>
          <div class='flex flex-wrap sm:flex-row flex-col py-6 mb-12'>
            <h1 class='sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0'>
              Rent By Categories
            </h1>
            <p class='sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0'>
              Experience the freedom of two-wheeled exploration through our bike
              rental website's categorized selection, designed to effortlessly
              match you with the perfect bike.
            </p>
          </div>
        </div>
        <div class='flex flex-wrap sm:-m-4  -mb-10 -mt-4'>
          {array.map((array) => {
            return (
              <div class='p-2 md:w-1/3 sm:mb-0 mb-6 border-2 rounded-md border-gray-200'>
                <div class='rounded-lg h-64 overflow-hidden'>
                  <img
                    alt='content'
                    class='object-cover object-center h-full w-full'
                    src={array.images}
                  />
                </div>
                <h2 class='text-xl font-medium title-font text-gray-900 mt-5'>
                  {array.name}
                </h2>

                <a class='text-indigo-500 inline-flex items-center mt-1'>
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
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
