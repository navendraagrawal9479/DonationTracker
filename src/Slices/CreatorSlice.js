import { createSlice } from "@reduxjs/toolkit";
import creators from "../data/CreatorData";

const initialState = {
    creators: creators
}

const creatorSlice = createSlice({
    name:'creator',
    initialState,
    reducers:{

    }
});

export default creatorSlice.reducer;