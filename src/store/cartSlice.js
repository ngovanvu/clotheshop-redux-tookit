import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      console.log("actionCart", action);
      state.push(action.payload);
    },
    deletePro(state, action) {
      console.log("delete", action);
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export const { add, deletePro } = cartSlice.actions;
export default cartSlice.reducer;
