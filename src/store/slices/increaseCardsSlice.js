import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Added: Zhamal 18.03.23
//IncreaseCards - три меняющиеся карты

export const increaseCardsAction = createAsyncThunk(
    'increaseCardsAction',
    async (param, {dispatch, rejectWithValue}) => {
        try{
            const response = await axios('http://164.92.190.147:8880/api/v1/home/tours?limit=50')
            if(response.status === 200) {
                const data = await response.data.results
                dispatch(increaseCardsPhotos(data.filter(item => item.is_hot === true))) //only Hot tours
            } else{
                throw Error (`error: ${response.status}`)
            }
        } catch(e) {
            alert(e)
        }
    }
)


const increaseCardsSlice = createSlice({
    name:  'cardsSlice',
    initialState: {
        photos: [],
        preloader: false,
        cnt: 0
    }
    ,reducers: {
        increaseCardsPhotos: (state, action) => {
            if (state.cnt < action.payload.length) {
                state.photos = action.payload.slice(state.cnt, state.cnt += 3) //каждые три фотографии
            } else {
                state.cnt = 0;
                state.photos = action.payload.slice(state.cnt, state.cnt += 3)
            }

        }
    }

})

export const {increaseCardsPhotos} = increaseCardsSlice.actions
export default increaseCardsSlice.reducer