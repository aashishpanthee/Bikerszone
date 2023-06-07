import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/features/User/authSlice";
import bikeSlice from "../redux/features/Bikes/bikeSlice";
import cartSlice from "../redux/features/Cart/cartSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    bike: bikeSlice,
  },
});
