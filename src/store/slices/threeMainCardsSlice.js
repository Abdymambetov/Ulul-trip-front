import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


//first card
export const leftCardAction = createAsyncThunk(
    'leftCardAction',
    async (param, {dispatch, rejectWithValue}) => {
        try {
            const response = await axios('http://164.92.190.147:8880/api/v1/home/tours/?category=konnyj-tur') //&limit=9
            if (response.status === 200) {
                const data = await response.data.results
                dispatch(getLeftCardPhotos(data))
            } else {
                throw Error(`error: ${response.status}`)
            }
        } catch (e) {

        }
    }
)

//second card
export const hotCardAction = createAsyncThunk(
    'hotCardAction',
    async (param, {dispatch, rejectWithValue}) => {
        try {
            const response = await axios('http://164.92.190.147:8880/api/v1/home/tours?limit=50') //?limit=10&offset=10
            if (response.status === 200) {
                const data = await response.data.results
                dispatch(getHotCardPhotos(data.filter(item => item.is_hot)))
            } else {
                throw Error(`error: ${response.status}`)
            }
        } catch (e) {

        }
    }
)

//third card
export const rightCardAction = createAsyncThunk(
    'rightCardAction',
    async (param, {dispatch, rejectWithValue}) => {
        try {
            const response = await axios('http://164.92.190.147:8880/api/v1/home/tours/?category=velotur')
            // const response = await axios('http://164.92.190.147:8880/api/v1/home/tours/?category=jeep-tur&limit=9')
            if (response.status === 200) {
                const data = await response.data.results
                dispatch(getRightCardPhotos(data))
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
        leftPhotos: {
            photos: [],
            cnt: 0
        },
        rightPhotos: {
            photos: [],
            cnt: 0
        },
        hotPhotos: {
            photos: [],
            cnt: 0
        }
    }
    , reducers: {
        getLeftCardPhotos: (state, action) => {
            if (state.leftPhotos.cnt < action.payload.length) {
                state.leftPhotos.photos = action.payload.slice(state.leftPhotos.cnt, state.leftPhotos.cnt += 1)
            } else {
                state.leftPhotos.cnt = 0;
                state.leftPhotos.photos = action.payload.slice(state.leftPhotos.cnt, state.leftPhotos.cnt += 1)
            }
        },
        getRightCardPhotos: (state, action) => {
            if (state.rightPhotos.cnt < action.payload.length) {
                state.rightPhotos.photos = action.payload.slice(state.rightPhotos.cnt, state.rightPhotos.cnt += 1)
            } else {
                state.rightPhotos.cnt = 0;
                state.rightPhotos.photos = action.payload.slice(state.rightPhotos.cnt, state.rightPhotos.cnt += 1)
            }
        },
        getHotCardPhotos: (state, action) => {
            let photos = action.payload //.filter(item => item.is_hot === true)
            if (state.hotPhotos.cnt < photos.length) {
                state.hotPhotos.photos = photos.slice(state.hotPhotos.cnt, state.hotPhotos.cnt += 1)
            } else {
                state.hotPhotos.cnt = 0;
                state.hotPhotos.photos = photos.slice(state.hotPhotos.cnt, state.hotPhotos.cnt += 1)
            }
        }
    }

})


export const {getLeftCardPhotos, getRightCardPhotos, getHotCardPhotos} = threeMainCardsSlice.actions
export default threeMainCardsSlice.reducer