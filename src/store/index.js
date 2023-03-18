import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import FilterTourReducer from './slices/FilterTour'
import preloaderReducer from './slices/preloaderSlice'
import profileReducer from './slices/profileSlice'
import registerReducer from './slices/registerSlice'
import tourReducer from './slices/TourSlice'
export const store = configureStore({
	reducer: {
		loading: preloaderReducer,
		modalTour: authReducer,
		regis: registerReducer,
		tours: tourReducer,
		profile: profileReducer,
		tours: tourReducer,
		filtered: FilterTourReducer,
	},
})
