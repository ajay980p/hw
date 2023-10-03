import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 10
}

const storeSlice = createSlice({
    name: "data",
    initialState,

    reducers: {
        dataInput: (state, action) => {
            state.value = action.payload
        }
    }
})

export default storeSlice.reducer;

export const { dataInput } = storeSlice.actions