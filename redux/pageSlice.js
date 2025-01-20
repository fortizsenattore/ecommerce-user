import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: { showWelcomeModal: true },
  reducers: {
    toggleWelcomeModal(state, action) {
      state.showWelcomeModal = !state.showWelcomeModal;
    },
  },
});
const { actions, reducer } = pageSlice;
export const { toggleWelcomeModal } = actions;
export default reducer;
