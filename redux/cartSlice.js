import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemToCart(state, action) {
      const selectedCar = state.find((car) => car.id === action.payload.id);

      if (!selectedCar) {
        state.push({ ...action.payload, qty: 1 });
      } else {
        selectedCar.qty += 1;
      }
    },
    removeItemFromCart(state, action) {
      const selectedCar = state.find((car) => car.id === action.payload.id);
      if (selectedCar.qty > 1) {
        selectedCar.qty -= 1;
      } else {
        return state.filter((car) => car.nanoId !== action.payload.nanoId);
      }
    },
    cleanCart(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addItemToCart, removeItemFromCart, cleanCart } = actions;
export default reducer;
