import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Unauthorized from "./Helper/Unauthorized";
import Categories from "./components/Categories";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BikeRentSection from "./components/BikeRentSection";

function App() {
  return (
    <div className='bg-slate-50'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/bikecategory' element={<Categories />} />
        <Route path='/bikerentsection' element={<BikeRentSection />} />
        <Route path='/reviews' element={<Testimonial />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Unauthorized />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
