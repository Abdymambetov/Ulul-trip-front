import { configureStore } from "@reduxjs/toolkit"
import preloaderReducer from "./slices/preloaderSlice"
import authReducer from "./slices/authSlice"


export const store = configureStore({
    reducer: {
        loading: preloaderReducer,
        auth: authReducer
    }
})