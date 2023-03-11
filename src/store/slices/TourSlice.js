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

const tourSlice = createSlice({
    name: 'tourSLice',
    initialState: {
        tourArr: [],
        categoryArr: []
    }, reducers: {
        addTour: (state, action) => {
            state.tourArr = action.payload
        }, 
        addCategoryArr: (state, action) => {
            state.categoryArr = action.payload
        }
    }
})
export const {addTour, addCategoryArr} = tourSlice.actions
export default tourSlice.reducer