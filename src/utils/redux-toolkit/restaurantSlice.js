import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    restaurants: [],
  },
  reducers: {
    getAllRestaurants: (state, action) => {
      state.restaurants = action.payload;
    },
  },
});

export const { getAllRestaurants } = restaurantSlice.actions;

export default restaurantSlice.reducer;
