import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Added: Zhamal 18.03.23
//IncreaseCards - три меняющиеся карты

export const increaseCardsAction = createAsyncThunk(
    'increaseCardsAction',
    async (param, {dispatch, rejectWithValue}) => {
        try{
            const reponse = await axios('http://164.92.190.147:8880/home/tours/?category=peshij-tur&limit=12')
            if(reponse.status === 200) {
                const data = await reponse.data.results
                dispatch(increaseCardsPhotos(data))
            } else{
                throw Error (`error: ${reponse.status}`)
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
                let filterPhotos = action.payload.map(item=>item.tour_images.filter(img => img.is_main === false)); //отфильтровать только фотографии и только main false?
                state.photos = filterPhotos.slice(state.cnt, state.cnt += 3) //каждые три фотографии
            } else {
                state.cnt = 0;
            }
        }
    }

})

export const {increaseCardsPhotos} = increaseCardsSlice.actions
export default increaseCardsSlice.reducer