import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleColorMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setColorMode: (state, action) => {
      state.mode = action.payload === "dark" ? "dark" : "light";
    },
  },
});

export const { toggleColorMode, setColorMode } = uiSlice.actions;
export default uiSlice.reducer;
