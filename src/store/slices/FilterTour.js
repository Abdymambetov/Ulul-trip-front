import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
function rus_to_latin ( str ) {
    
	var ru = {
			'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 
			'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'и': 'i', 
			'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 
			'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 
			'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 
			'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'u', 'я': 'ya'
	}, n_str = [];
	
	str = str.replace(/[ъь]+/g, '').replace(/й/g, 'i');
	
	for ( var i = 0; i < str.length; ++i ) {
		 n_str.push(
						ru[ str[i] ]
				 || ru[ str[i].toLowerCase() ] == undefined && str[i]
				 || ru[ str[i].toLowerCase() ].toUpperCase()
		 );
	}
	
	return n_str.join('');
}

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
		// builder.addCase(filterWhereSearch.fulfilled, (state, action) => {
		// 	state.filtered = action.payload
		// })
	},
})
export const filterSearch = createAsyncThunk('filterSearch', async param => {
	// console.log(param)
	
	let reg 
	if(param.region){
		if(rus_to_latin(param.region).toLowerCase()==='chui'){
			reg = 'chuy'
		}else{
			reg = rus_to_latin(param.region).toLowerCase()
		}
	}
	const { data } = await axios.get('http://164.92.190.147:8880/home/tours/', {
		params: {...param,region:reg},
	})
	return data
})

// export const filterWhereSearch = createAsyncThunk(
// 	'filterWhereSearch',
// 	async (param, { dispatch }) => {
// 		const { data } = await axios.get(
// 			`http://164.92.190.147:8880/home/tour/${param}`
// 		)
// 		return data
// 	}
// )

export const {
	setValueWhere,
	setValueDuration,
	setValuePrice,
	setValueDay,
	setComplexity,
	setCategory,
} = FilterSlice.actions

export default FilterSlice.reducer
