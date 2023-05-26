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
            </Routes>
            {/*  <Routes>
          <Route
            path='/'
            element={
              <AdminRoute accessRole={["admin", "superadmin", "vendor"]}>
                <Navigate to='/admin/dashboard' replace />
              </AdminRoute>
            }
          />
          <Route
            path='/dashboard'
            element={
              <AdminRoute accessRole={["admin", "superadmin", "vendor"]}>
                <Dashboard />
              </AdminRoute>
            }
          />
          <Route
            path='/user'
            element={
              <AdminRoute accessRole={["admin", "superadmin"]}>
                <User />
              </AdminRoute>
            }
          />
          <Route
            path='/user/add'
            element={
              <AdminRoute accessRole={["admin", "superadmin"]}>
                <Adduser />
              </AdminRoute>
            }
          />
          <Route
            path='/user/edit/:id'
            element={
              <AdminRoute accessRole={["admin", "superadmin"]}>
                <EditUser />
              </AdminRoute>
            }
          />
          <Route
            path='/category'
            element={
              <AdminRoute accessRole={["admin", "superadmin", "vendor"]}>
                <Category />
              </AdminRoute>
            }
          />
          <Route
            path='/category/categoryview'
            element={
              <AdminRoute accessRole={["admin", "superadmin", "vendor"]}>
                <Categoryview />
              </AdminRoute>
            }
          />
          <Route
            path='/category/edit/:id'
            element={
              <AdminRoute accessRole={["admin", "superadmin"]}>
                <Categoryedit />
              </AdminRoute>
            }
          />
          <Route
            path='/category/add'
            element={
              <AdminRoute accessRole={["admin", "superadmin"]}>
                <Categoryadd />
              </AdminRoute>
            }
          />
          <Route
            path='/servicefeature'
            element={
              <AdminRoute accessRole={["admin", "superadmin", "vendor"]}>
                <Servicefeature />
              </AdminRoute>
            }
          />
          <Route
            path='/servicefeaturetable'
            elemen={
              <AdminRoute accessRole={["admin", "superadmin", "vendor"]}>
                <Servicefeaturetable />
              </AdminRoute>
            }
          />
          <Route
            path='/servicefeature/view/:serviceId'
            element={
              <AdminRoute accessRole={["admin", "superadmin"]}>
                <ViewServiceFeature />
              </AdminRoute>
            }
          />
          <Route
            path='/servicefeature/edit/:id'
            element={
              <AdminRoute accessRole={["admin", "superadmin"]}>
                <EditServiceFeature />
              </AdminRoute>
            }
          />
          <Route
            path='/servicefeature/add'
            element={
              <AdminRoute accessRole={["admin", "superadmin"]}>
                <AddServiceFeature />
              </AdminRoute>
            }
          />
          <Route
            path='/service'
            element={
              <AdminRoute accessRole={["admin", "superadmin"]}>
                <Service />
              </AdminRoute>
            }
          />
          <Route
            path='/service/add'
            element={
              <AdminRoute accessRole={["admin", "superadmin"]}>
                <AddService />
              </AdminRoute>
            }
          />
          <Route
            path='/service/edit/:id'
            element={
              <AdminRoute accessRole={["admin", "superadmin"]}>
                <EditService />
              </AdminRoute>
            }
          />
          <Route
            path='/service/view'
            element={
              <AdminRoute accessRole={["admin", "superadmin"]}>
                <ViewService />
              </AdminRoute>
            }
          />
          <Route
            path='/store'
            element={
              <AdminRoute accessRole={["admin", "superadmin", "vendor"]}>
                <Store />
              </AdminRoute>
            }
          />
          <Route
            path='/storetable'
            element={
              <AdminRoute accessRole={["admin", "superadmin", "vendor"]}>
                <Storetable />
              </AdminRoute>
            }
          />
          <Route
            path='/store/add'
            element={
              <AdminRoute accessRole={["admin", "superadmin", "vendor"]}>
                <AddStore />
              </AdminRoute>
            }
          />
          <Route
            path='/storetable/edit'
            element={
              <AdminRoute accessRole={["admin", "superadmin", "vendor"]}>
                <EditStore />
              </AdminRoute>
            }
          />
          <Route
            path='/storetable/view'
            element={
              <AdminRoute accessRole={["admin", "superadmin", "vendor"]}>
                <ViewStore />
              </AdminRoute>
            }
          />

          <Route
            path='/vendor/order/all'
            element={
              <AdminRoute accessRole={["admin", "superadmin", "vendor"]}>
                <VendorOrder />
              </AdminRoute>
            }
          />
          <Route
            path='/vendor/order/orderview/:id'
            element={
              <AdminRoute accessRole={["admin", "superadmin", "vendor"]}>
                <ViewVendorOrder />
              </AdminRoute>
            }
          />

          <Route
            path='/order/all'
            element={
              <AdminRoute accessRole={["admin", "superadmin"]}>
                <AllOrder />
              </AdminRoute>
            }
          />
          <Route
            path='/order/orderview/:id'
            element={
              <AdminRoute accessRole={["admin", "superadmin", "vendor"]}>
                <ViewOrder />
              </AdminRoute>
            }
          />
          <Route
            path='/fiscalyear'
            element={
              <AdminRoute accessRole={["admin", "superadmin", "vendor"]}>
                <FiscalYear />
              </AdminRoute>
            }
          />
          <Route
            path='/fiscalyeartable'
            element={
              <AdminRoute accessRole={["admin", "superadmin", "vendor"]}>
                <Fiscalyeartable />
              </AdminRoute>
            }
          />
          <Route
            path='/fiscalyear/edit/:id'
            element={
              <AdminRoute accessRole={["admin", "superadmin", "vendor"]}>
                <EditFiscalYear />
              </AdminRoute>
            }
          />
          <Route
            path='/fiscalyear/add'
            element={
              <AdminRoute accessRole={["admin", "superadmin", "vendor"]}>
                <AddFiscalYear />
              </AdminRoute>
            }
          />
        </Routes> */}
            {/* <FooterAdmin /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
