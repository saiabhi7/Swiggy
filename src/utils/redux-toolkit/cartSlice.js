import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartItemsTotal: 0,
    taxTotal: 0,
    finalAmount: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.cartItemsTotal +=
        (action.payload.defaultPrice
          ? action.payload.defaultPrice
          : action.payload.price) / 100;
      state.taxTotal += state.cartItemsTotal * 0.3;
      state.finalAmount = state.cartItemsTotal + state.taxTotal;
      state.cartItems.push(action.payload);
    },
    removeItemFromCart: (state, action) => {
      state.cartItems.pop();
    },
    clearCart: (state, action) => {
      state.cartItems.length = 0;
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
