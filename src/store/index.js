import { configureStore } from "@reduxjs/toolkit"
import preloaderReducer from "./slices/preloaderSlice"
import authReducer from "./slices/authSlice"
import registerReducer from "./slices/registerSlice"


export const store = configureStore({
    reducer: {
        loading: preloaderReducer,
        modalTour: authReducer,
        regis: registerReducer
    }
})