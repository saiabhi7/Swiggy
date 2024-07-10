import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import restaurantSlice from "./restaurantSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurants: restaurantSlice,
  },
});

export default store;
