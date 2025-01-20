import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"product",
    initialState : null,
    reducers: {
        getAllProducts(state, action) {
            return action.payload;
        },
    },
});

const { actions, reducer } = productSlice;
export const { getAllProducts } = actions;
export default reducer;
