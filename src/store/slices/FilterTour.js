import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';



const FilterSlice = createSlice({
	name: 'mainSlice',
	initialState: {
		value: {
			duration: '',
			price_max: '',
			date_departure: '',
			complexity: '',
			category: '',
			region:'',
		},
		filtered: {},
	},
	reducers: {
		setValueWhere: (state, action) => {
			state.value.region = action.payload
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
	},
})

const regionFilter =(param)=>{
	const newWord = param.toLowerCase()
	if(newWord.includes('чуй')){
		return 'chuy'
	}else if(newWord.includes('иссык куль')){
		return 'issyk-kul'
	}else if(newWord.includes('талас')){
		return 'talas'
	} else if(newWord.includes('джалал-абад')){
		return 'dzhalal-abad'
	}else if(newWord.includes('баткен')){
		return 'batken'
	}else if(newWord.includes('нарын')){
		return 'naryn'
	} else if(newWord.includes('ош')){
		return 'osh'
	}else{
		return ''
	}
}
const complexFilter =(param) => {
	const newWord = param.toLowerCase()
	if(newWord.includes('легкий')){
		return 'Easy'
	}else if(newWord.includes('средний')){
		return 'Medium'
	}else if(newWord.includes('сложный')){
		return 'Hard'
	} else if(newWord.includes('экстремальный')){
		return 'Extra'
	}else{
		return ''
	}
}

const categoryFilter =(param)=>{
	const newWord = param.toLowerCase()
	if(newWord.includes('конный тур')){
		return 'konnyj-tur'
	}else if(newWord.includes('пеший тур')){
		return 'peshij-tur'
	} else if(newWord.includes('джип тур')){
		return 'jeep-tur'
	}else if(newWord.includes('велотур')){
		return 'velotur'
	}else{
		return ''
	}
}

export const filterSearch = createAsyncThunk('filterSearch', async param => {	
	const reg = regionFilter(param.region)
	const complex = complexFilter(param.complexity)
	const category = categoryFilter(param.category)
	const { data } = await axios.get('http://164.92.190.147:8880/api/v1/home/tours/', {
		params: {...param,region:reg,complexity:complex,category:category},
	})
	return data
})

export const {
	setValueWhere,
	setValueDuration,
	setValuePrice,
	setValueDay,
	setComplexity,
	setCategory,
} = FilterSlice.actions

export default FilterSlice.reducer
