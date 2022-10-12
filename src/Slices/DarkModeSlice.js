import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
  color:'',
  bgColor:''
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      state.color = state.darkMode ? '#fff' : '#000';
      state.bgColor = state.darkMode ? '#000' : '#fff';
    },
  },
});

export default darkModeSlice.reducer;

export const {toggleDarkMode} = darkModeSlice.actions;