import { createSlice } from '@reduxjs/toolkit'

const FilterSlice = createSlice({
    name: 'mainSlice',
    initialState: {
        value: {
            valueWhere: '',
            valueDuration: '',
            valuePrice: '',
            valueDay: ''
        }
    },
    reducers: {
        setValueWhere: (state, action) => {
            state.value.valueWhere = action.payload
        },
        setValueDuration: (state, action) => {
            state.value.valueDuration = action.payload
        },
        setValuePrice: (state, action) => {
            state.value.valuePrice = action.payload
        },
        setValueDay: (state, action) => {
            state.value.valueDay = action.payload
        }
    }
})

export const { setValueWhere, setValueDuration, setValuePrice, setValueDay } =
    FilterSlice.actions

export default FilterSlice.reducer
