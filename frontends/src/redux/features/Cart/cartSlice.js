import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { json } from "react-router-dom";

const initialState = {
  loading: false,
  error: null,
  success: false,
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearFields: (state, { payload }) => {
      state.success = false;
      state.loading = false;
      state.error = false;
    },
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(
          `Increased ${state.cartItems[itemIndex].bikeName} rent days`
        );
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(` ${action.payload.bikeName} added to cart`);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
      toast.error(`${action.payload.bikeName} removed from cart`);
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.error(`Decreased ${action.payload.bikeName} rent days`);
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
        toast.error(`${action.payload.bikeName} removed from cart`);
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
    },
    clearCart(state, action) {
      state.cartItems = [];
      toast.error(`Cart Cleared`);
      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});
export const {
  addToCart,
  clearFields,
  decreaseCart,
  removeFromCart,
  clearCart,
  getTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
