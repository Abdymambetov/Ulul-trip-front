import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {closeEditProfileModal} from "./authSlice";
const API_URL = 'http://164.92.190.147';

export const fetchFavorite = createAsyncThunk(
    'favorites/fetchFavorite',
    async (id,user,{dispatch, rejectWithValue}) => {
        try{
            const response = await axios.get(`${API_URL}/profiles/${id}/favorites/`,
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token')).access}`                    }
                })
            const data = await response.data
            if(response.status === 200) {
                dispatch(setUser(data))
            }
        } catch(e) {
            alert(e)
        }
    }
)
export const fetchFavoriteProducts = createAsyncThunk(
    'favorites/fetchFavoriteProducts',
    async (slug,token ,{dispatch, rejectWithValue}) => {
        try{
            const response = await axios.post(`${API_URL}/home/tours/${slug}/favorite`,
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).access}`,
                    }
                })
            if (response.status === 200) {
                const data = await response.data
                console.log(data);
                dispatch(addProduct(data))
            }else {
                throw Error (`error: ${response.status}`)
            }
        } catch(e) {
            alert(e)
        }
    }
)
export const removeFavorite = createAsyncThunk(
    'favorites/removeFavorite',
    async (slug, token,{dispatch, rejectWithValue}) => {
        try{
            const response = await axios.delete(`${API_URL}/home/tours/${slug}/favorite`,
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).access}`
                    }
                })
            if (response.status === 200) {
                const data = await response.data
                console.log(data);
                dispatch(removeProduct(data))
            }else {
                throw Error (`error: ${response.status}`)
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
        user:{},

    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('favorites', JSON.stringify(state.user))
        },
        addProduct: (state, action) => {
            state.card = [...state.card, action.payload]
            localStorage.setItem('favorites', JSON.stringify(state.card))
        },
        removeProduct: (state, action) => {
            state.card = state.card.filter((item) => item.id !== action.payload.id);
            localStorage.setItem('favorites', JSON.stringify(state.card))
        }

    },
    extraReducers: {
        [fetchFavorite.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchFavorite.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.user =action.payload;
        },
        [fetchFavorite.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
        [fetchFavoriteProducts.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchFavoriteProducts.fulfilled]: (state, action) => {
            state.status = 'succeeded';
        },
        [fetchFavoriteProducts.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
        [removeFavorite.pending]: (state, action) => {
            state.status = 'loading';
        },
        [removeFavorite.fulfilled]: (state, action) => {
            state.status = 'succeeded';

        },
        [removeFavorite.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
    },
});

export const {addProduct, removeProduct,setUser} = favorites.actions
export default favorites.reducer