import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Unauthorized from "./Helper/Unauthorized";
import Categories from "./components/Categories";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import BikeRentSection from "./components/BikeRentSection";
import Dashboard from "./dashboard/Dashboard";
import ProtectedRoute from "./Helper/ProtectedRoute";
import Order from "./components/Order";

function App() {
  return (
    <div className='bg-slate-50'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/bikecategory' element={<Categories />} />
        <Route path='/bikerentsection' element={<BikeRentSection />} />
        <Route path='/order' element={<Order />} />
        <Route path='/reviews' element={<Testimonial />} />
        <Route path='/contact' element={<Contact />} />
        <Route
          path='/dashboard/*'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<Unauthorized />} />
      </Routes>
    </div>
  );
}

export default App;
