import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import axios from "axios";

export const getReviwesAction = createAsyncThunk(
    'getReviwesAction',
    async(slug, {dispatch, rejectWithValue}) => {
        try{
            const response = await axios.get(`http://164.92.190.147:8880/api/v1/home/tours/${slug}/reviews/`, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).access}`
                }
            })
            if(response.status === 200) {
                const data = await response.data.results
                dispatch(getReviwes(data))
                console.log(data);
            }
        } catch(e) {
            alert(e)
        }
    }
)

export const addReviewAction = createAsyncThunk(
    'addReviewAction',
    async(param, {dispatch, rejectWithValue}) => {
        try{
            const response = await axios({
                method: 'POST',
                url: 'http://164.92.190.147:8880/api/v1/home/review/',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).access}`
                },
                data: JSON.stringify(param)
            })
            if(response.status === 201) {
                const data = await response.data
                console.log(data);
                alert('hello')
            }
        } catch(e){
            alert(e)
        }
    }
)
const reviewsSlice = createSlice({
    name: 'reviewsSlice',
    initialState: {
        reviews: []
    }, 
    reducers: {
        getReviwes: (state, action) => {
            state.reviews = action.payload
        }
    }
})
export const {getReviwes} = reviewsSlice.actions
export default reviewsSlice.reducer