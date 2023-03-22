import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const FilterSlice = createSlice({
	name: 'mainSlice',
	initialState: {
		value: {
			duration: '',
			price_max: '',
			date_departure: '',
			complexity: '',
			category: '',
		},
		search: '',
		filtered: {},
	},
	reducers: {
		setValueWhere: (state, action) => {
			state.search = action.payload
		},
		setValueDuration: (state, action) => {
			state.value.duration = action.payload
		},
		setValuePrice: (state, action) => {
			state.value.price_max = action.payload
		},
		setValueDay: (state, action) => {
			state.value.date_departure = action.payload
		},
		setComplexity: (state, action) => {
			if (state.value.complexity === action.payload) {
				state.value.complexity = ''
			} else {
				state.value.complexity = action.payload
			}
		},
		setCategory: (state, action) => {
			if (state.value.category === action.payload) {
				state.value.category = ''
			} else {
				state.value.category = action.payload
			}
		},
	},
	extraReducers: builder => {
		builder.addCase(filterSearch.fulfilled, (state, action) => {
			state.filtered = action.payload
		})
		builder.addCase(filterWhereSearch.fulfilled, (state, action) => {
			state.filtered = action.payload
		})
	},
})
export const filterSearch = createAsyncThunk('filterSearch', async param => {
	// console.log(param)
	const { data } = await axios.get('http://164.92.190.147:8880/home/tours/', {
		params: param,
	})
	return data
})

export const filterWhereSearch = createAsyncThunk(
	'filterWhereSearch',
	async (param, { dispatch }) => {
		const { data } = await axios.get(
			`http://164.92.190.147:8880/home/tour/${param}`
		)
		return data
	}
)

export const {
	setValueWhere,
	setValueDuration,
	setValuePrice,
	setValueDay,
	setComplexity,
	setCategory,
} = FilterSlice.actions

export default FilterSlice.reducer
