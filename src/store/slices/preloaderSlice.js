import { createSlice } from '@reduxjs/toolkit'

const preloaderSlice = createSlice({
    name: 'mainSlice',
    initialState: {
        preloader: false,
        cursor: ''
    },
    reducers: {
        preloaderOn: (state, action) => {
            state.preloader = true
        },
        preloaderOff: (state, action) => {
            state.preloader = false
        },
        getSmallerCursor: (state, action) => {
            state.cursor = 'show'
        },
        getBigerCursor: (state, action) => {
            state.cursor = 'сursorenter'
        }
    }
})

export const { preloaderOff, preloaderOn, getBigerCursor, getSmallerCursor } =
    preloaderSlice.actions

export default preloaderSlice.reducer
