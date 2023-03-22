import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import FilterTourReducer from './slices/FilterTour'
import preloaderReducer from './slices/preloaderSlice'
import profileReducer from './slices/profileSlice'
import registerReducer from './slices/registerSlice'
import tourReducer from './slices/TourSlice'
import likesModalReducer from "./slices/likesModalSlice"
import increaseCardsReducer from "./slices/increaseCardsSlice";
import secondCardsReducer from "./slices/secondCardsSlice";
import threeMainCardsReducer from "./slices/threeMainCardsSlice";



export const store = configureStore({
	reducer: {
		loading: preloaderReducer,
		modalTour: authReducer,
		regis: registerReducer,
		profile: profileReducer,
		tours: tourReducer,
		filtered: FilterTourReducer,
		favorites:likesModalReducer,
		increasedCards: increaseCardsReducer,
		secondCards: secondCardsReducer,
		threeMainCards: threeMainCardsReducer
	},
})
