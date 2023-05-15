import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

//Added: Zhamal 18.03.23
//SecondCards - две разные статичные карты с переходом на страницу тура

//first card - Jeep tour
export const jeepCardAction = createAsyncThunk(
    'jeepCardAction',
    async (param, {dispatch, rejectWithValue}) => {
        try {
            const reponse = await axios('http://164.92.190.147:8880/api/v1/home/tours/?category=jeep-tur&limit=1&offset=5')
            if (reponse.status === 200) {
                const data = await reponse.data.results
                dispatch(jeepCardsPhotos(data))
            } else {
                throw Error(`error: ${reponse.status}`)
            }
        } catch (e) {
            alert(e)
        }
    }
)

//second card - Peshij tour
export const peshCardAction = createAsyncThunk(
    'peshCardAction',
    async (param, {dispatch, rejectWithValue}) => {
        try {
            const reponse = await axios('http://164.92.190.147:8880/api/v1/home/tours/?category=peshij-tur&limit=1&offset=5')
            if (reponse.status === 200) {
                const data = await reponse.data.results
                dispatch(peshCardsPhotos(data))
            } else {
                throw Error(`error: ${reponse.status}`)
            }
        } catch (e) {
            alert(e)
        }
    }
)


const secondCardsSlice = createSlice({
    name: 'secondCardsSlice',
    initialState: {
        jeep: [],
        pesh: []
    }
    , reducers: {
        jeepCardsPhotos: (state, action) => {
            let filterPhotos = action.payload
            state.jeep = filterPhotos;
        },

        peshCardsPhotos: (state, action) => {
            let filterPhotos = action.payload
            state.pesh = filterPhotos;
        }
    }

})

export const {jeepCardsPhotos, peshCardsPhotos} = secondCardsSlice.actions
export default secondCardsSlice.reducer