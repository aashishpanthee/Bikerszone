import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import Sidebar from "./sidebar/Sidebar";
import Dashboardnavbar from "./navbar/Dashboardnavbar";
import Headerstats from "./components/Headerstats";
import User from "./sidebar/User/User";
import Bike from "./sidebar/Bikes/Bike";
import AddBike from "./sidebar/Bikes/AddBike";
import DashboardHome from "./DashboardHome";
import EditBike from "./sidebar/Bikes/EditBike";

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <div className=''>
      <div className=''>
        <Sidebar />
        <div className='relative md:ml-64 bg-blueGray-100'>
          <Dashboardnavbar />
          {/* Header */}
          <Headerstats />
          <div className='w-full px-4 mx-auto -m-24 md:px-10'>
            <Routes>
              <Route path='/' element={<DashboardHome />} />
              <Route path='/users' element={<User />} />
              <Route path='/bikes' element={<Bike />} />
              <Route path='/bikes/add' element={<AddBike />} />
              <Route path='/bikes/edit/:id' element={<EditBike />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
