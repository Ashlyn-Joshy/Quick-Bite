import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearItems: (state) => {
      state.items.length = 0;
    },
    removeItem: (state, action) => {
      state.items.splice(action.payload, 1);
    },
  },
});

export const { addItem, clearItems, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
