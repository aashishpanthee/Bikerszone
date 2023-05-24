import React, { useEffect } from "react";
import WhyUs from "./WhyUs";
import Categories from "./Categories";
import Testimonial from "./Testimonial";
import Main from "./Main";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className='bg-slate-50'>
      <Navbar />
      <Main />
      <Categories />
      <WhyUs />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
