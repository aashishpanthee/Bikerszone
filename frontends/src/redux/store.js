import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/features/User/authSlice";
import bikeSlice from "../redux/features/Bikes/bikeSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    bike: bikeSlice,
  },
});
