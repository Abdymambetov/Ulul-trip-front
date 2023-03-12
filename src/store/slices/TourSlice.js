import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { links } from "../../links/Links";
import { tourLinks } from "../../links/TourLinks";

export const categoryAction = createAsyncThunk(
    'categoryAction',
    async(param, {dispatch, rejectWithValue}) => {
        try{
            const response = await axios.get(tourLinks.category)
            if (response.status === 200) {
                const data = await response.data.results
                dispatch(addCategoryArr(data))
            } else {
                throw Error(`error: ${response.status}`)
            }
        } catch(e) {
            alert(e)
        }
    }
)
 export const horseTourAction = createAsyncThunk(
    'horseTourAction',
    async (param, {dispatch, rejectWithValue}) => {
        try{
            const response = await axios('http://164.92.190.147:8880/home/tours/?search=%D0%BA%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9')
            if(response.status === 200){
                const data = await response.data.results
                console.log(data);
                dispatch(getHorseArr(data))
            } else{
                throw Error(`error: ${response.status}`)
            }
        } catch(e){
            alert(e)
        }
    }
 )
 
const tourSlice = createSlice({
    name: 'tourSLice',
    initialState: {
        tourArr: [],
        categoryArr: [],
        horseArr: [],
    }, reducers: {
        addTour: (state, action) => {
            state.tourArr = action.payload
        }, 
        addCategoryArr: (state, action) => {
            state.categoryArr = action.payload
        },
        getHorseArr: (state, action) => {
            state.horseArr = action.payload
        }
    }
})
export const {addTour, addCategoryArr, getHorseArr, } = tourSlice.actions
export default tourSlice.reducer