import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = 'http://164.92.190.147:8880';

export const fetchFavorite = createAsyncThunk(
    'favorites/fetchFavorite',
    async (_,{dispatch, rejectWithValue}) => {
        const {id} = JSON.parse(localStorage.getItem('token'))
        try{
            const response = await axios.get(`${API_URL}/profiles/${id}/favorites/`,
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).access}`
                    }
                })
            const data = await response.data
            console.log(data)
            if(response.status === 200) {
                //console.log(data)
                dispatch(setUser(data))
                for (let i = 0; i < data.favorite_tour.length; i++) {
                    dispatch(addProduct(data.favorite_tour[i]))
                }

            }
        } catch(e) {
            alert(e)
        }
    }
)
export const fetchFavoriteProducts = createAsyncThunk(
    'favorites/fetchFavoriteProducts',
    async (item,{dispatch, rejectWithValue}) => {
        try{
            const response = await axios.post(`${API_URL}/home/tours/${item.slug}/favorite/`,
                {},{
                    headers: {
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).access}`,
                    }
                })
            const data = await response.data

            //console.log(JSON.parse(localStorage.getItem('user')).access)
            //console.log(response.status)
            console.log(item?.tour_images[0]?.images)
            if(response.status === 200) {
                dispatch(addProduct(item))
                //console.log(data)

            }
        } catch(e) {
            alert(e)
        }
    }
)
export const removeFavorite = createAsyncThunk(
    'favorites/removeFavorite',
    async (item, {dispatch, rejectWithValue}) => {
        try{
            const response = await axios.delete(`${API_URL}/home/tours/${item.slug}/favorite/`,
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).access}`,
                    }
                })
            const data = await response.data
            if(response.status === 200) {
                dispatch(removeProduct(item))
                console.log(data)
            }
        } catch(e) {
            alert(e)
        }
    }
)
const favorites = createSlice({
    name: 'favorites',
    initialState: {
        card: [],
        userInfo:null

    },
    reducers: {
        setUser: (state, action) => {
            state.userInfo = action.payload

        },
        addProduct: (state, action) => {
            state.card = [...state.card, action.payload]

        },
        removeProduct: (state, action) => {
            const el = action.payload;
            state.card = state.card.filter((item) => item.id !== el.id);

        }

    },
    extraReducers: {
        [fetchFavorite.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchFavorite.fulfilled]: (state, action) => {
            state.status = 'succeeded';
        },
        [fetchFavorite.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
    },
});

export const {addProduct, removeProduct,setUser} = favorites.actions
export default favorites.reducer