import { configureStore } from "@reduxjs/toolkit";
import CreatorSliceReducer from "./Slices/CreatorSlice";
import DarkModeSliceReducer from "./Slices/DarkModeSlice";

export const store = configureStore({
    reducer:{
        creator:CreatorSliceReducer,
        darkMode:DarkModeSliceReducer
    }
});