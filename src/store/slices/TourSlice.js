import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const tourSlice = createSlice({
    name: 'tourSLice',
    initialState: {
        tourArr: []
    }, reducers: {
        addTour: (state, action) => {
            state.tourArr = action.payload
        }
    }
})
export const {addTour} = tourSlice.actions
export default tourSlice.reducer