import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    saveLastOrder(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = orderSlice;
export const { saveLastOrder } = actions;
export default reducer;
