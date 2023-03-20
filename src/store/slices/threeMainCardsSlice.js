import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

//Added: Zhamal 18.03.23
//ThreeCards - три разные меняющиеся карты

//first card - Peshij tour
export const peshCardAction = createAsyncThunk(
    'peshCardAction',
    async (param, {dispatch, rejectWithValue}) => {
        try {
            const response = await axios('http://164.92.190.147:8880/home/tours/?category=peshij-tur')
            if (response.status === 200) {
                const data = await response.data.results
                dispatch(getPeshCardPhotos(data))
            } else {
                throw Error(`error: ${response.status}`)
            }
        } catch (e) {

        }
    }
)

//second card - Peshij tour
export const hotCardAction = createAsyncThunk(
    'hotCardAction',
    async (param, {dispatch, rejectWithValue}) => {
        try {
            const response = await axios('http://164.92.190.147:8880/home/tours') ///?limit=10&offset=10
            if (response.status === 200) {
                const data = await response.data.results
                dispatch(getHotCardPhotos(data))
            } else {
                throw Error(`error: ${response.status}`)
            }
        } catch (e) {

        }
    }
)

//third card - Peshij tour
export const veloCardAction = createAsyncThunk(
    'veloCardAction',
    async (param, {dispatch, rejectWithValue}) => {
        try {
            // const response = await axios('http://164.92.190.147:8880/home/tours/?category=velotur')
            const response = await axios('http://164.92.190.147:8880/home/tours/?category=jeep-tur')
            if (response.status === 200) {
                const data = await response.data.results
                dispatch(getVeloCardPhotos(data))
            } else {
                throw Error(`error: ${response.status}`)
            }
        } catch (e) {
            alert(e)
        }
    }
)


const threeMainCardsSlice = createSlice({
    name: 'cardsSlice',
    initialState: {
        peshPhotos: {
            photos: [],
            cnt: 0
        },
        veloPhotos: {
            photos: [],
            cnt: 0
        },
        hotPhotos: {
            photos: [],
            cnt: 0
        }
    }
    , reducers: {
        getPeshCardPhotos: (state, action) => {
            if (state.peshPhotos.cnt < action.payload.length) {
                let filterPhotos = action.payload.map(item => item.tour_images.filter(img => img.is_main === true));
                state.peshPhotos.photos = filterPhotos.slice(state.peshPhotos.cnt, state.peshPhotos.cnt += 1)
            } else {
                state.peshPhotos.cnt = 0;
            }
        },
        getVeloCardPhotos: (state, action) => {
            if (state.veloPhotos.cnt < action.payload.length) {
                let filterPhotos = action.payload.map(item => item.tour_images.filter(img => img.is_main === true));
                state.veloPhotos.photos = filterPhotos.slice(state.veloPhotos.cnt, state.veloPhotos.cnt += 1)
            } else {
                state.veloPhotos.cnt = 0;
            }
        },
        getHotCardPhotos: (state, action) => {
            let photos = action.payload.filter(item => item.is_hot === true)

            if (state.hotPhotos.cnt < photos.length) {
                let filterPhotos = photos.map(item => item.tour_images.filter(img => img.is_main === true));
                state.hotPhotos.photos = filterPhotos.slice(state.hotPhotos.cnt, state.hotPhotos.cnt += 1) //каждые три фотографии
            } else {
                state.hotPhotos.cnt = 0;
            }
        }
    }

})


export const {getPeshCardPhotos, getVeloCardPhotos, getHotCardPhotos} = threeMainCardsSlice.actions
export default threeMainCardsSlice.reducer