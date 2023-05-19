import React from "react";
import WhyUs from "./WhyUs";
import Categories from "./Categories";
import Testimonial from "./Testimonial";
import Main from "./Main";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className='bg-slate-50'>
      <Main />
      <Categories />
      <WhyUs />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
