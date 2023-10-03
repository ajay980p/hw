import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/receiveSlice";

const store = configureStore({
    reducer: {
        storedData: dataReducer
    }
})

export default store