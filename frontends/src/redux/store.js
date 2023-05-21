import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/features/User/authSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
