import { configureStore } from "@reduxjs/toolkit"
import preloaderReducer from "./slices/preloaderSlice"


export const store = configureStore({
    reducer: {
        loading: preloaderReducer
    }
})