import { createSlice } from "@reduxjs/toolkit";

const preloaderSlice = createSlice({
   name:  'mainSlice',
   initialState: {
        preloader: false
    },
    reducers: {
        preloaderOn: (state, action) => {
            state.preloader = true
        },
        preloaderOff: (state, action) => {
            state.preloader = false
        }
    }
})
export const {preloaderOff, preloaderOn} = preloaderSlice.actions

export default preloaderSlice.reducer