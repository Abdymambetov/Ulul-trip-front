import { configureStore } from "@reduxjs/toolkit"
import preloaderReducer from "./slices/preloaderSlice"
import authReducer from "./slices/authSlice"
import registerReducer from "./slices/registerSlice"
import tourReducer from "./slices/TourSlice"

export const store = configureStore({
    reducer: {
        loading: preloaderReducer,
        modalTour: authReducer,
        regis: registerReducer,
        tours: tourReducer
    }
})