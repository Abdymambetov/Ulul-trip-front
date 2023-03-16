import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const FilterSlice = createSlice({
    name: 'mainSlice',
    initialState: {
        value: {
            valueWhere: '',
            duration: '',
            valuePrice: '',
            valueDay: ''
        }
    },
    reducers: {
        setValueWhere: (state, action) => {
            state.value.valueWhere = action.payload
        },
        setValueDuration: (state, action) => {
            state.duration = action.payload
        },
        setValuePrice: (state, action) => {
            state.value.valuePrice = action.payload
        },
        setValueDay: (state, action) => {
            state.value.valueDay = action.payload
        }
    }
})
export const filterSearch = createAsyncThunk('filterSearch', async param => {
    console.log(param)
    axios.get('http://164.92.190.147:8880/home/tours/', {
        params: {
            duration: '3'
        }
    })
})

export const { setValueWhere, setValueDuration, setValuePrice, setValueDay } =
    FilterSlice.actions

export default FilterSlice.reducer
