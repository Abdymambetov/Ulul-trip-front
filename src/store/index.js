import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import FilterTourReducer from './slices/FilterTour'
import preloaderReducer from './slices/preloaderSlice'
import profileReducer from './slices/profileSlice'
import registerReducer from './slices/registerSlice'
import tourReducer from './slices/TourSlice'
import increaseCardsReducer from "./slices/increaseCardsSlice";
import secondCardsReducer from "./slices/secondCardsSlice";
import threeMainCardsReducer from "./slices/threeMainCardsSlice";
export const store = configureStore({
	reducer: {
		loading: preloaderReducer,
		modalTour: authReducer,
		regis: registerReducer,
		tours: tourReducer,
		profile: profileReducer,
		filtered: FilterTourReducer,
		increasedCards: increaseCardsReducer, //Zhamal 18.03.23
		secondCards: secondCardsReducer, //Zhamal 18.03.23
		threeMainCards: threeMainCardsReducer //Zhamal 18.03.23
	}
})
