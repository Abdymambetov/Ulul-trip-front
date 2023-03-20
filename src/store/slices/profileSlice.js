import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getProfile = createAsyncThunk(
    'getProfile',
    async (id, {dispatch, rejectWithValue}) => {
        try{
            const response = await axios(`http://164.92.190.147:8880/profiles/profile/${id}`, 
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).access}`
                }
            })
            if (response.status === 200) {
                const data = await response.data
                console.log(data);
                dispatch(getusersInfo(data))
            }else {
                throw Error (`error: ${response.status}`)
               }
        } catch(e) {
            alert(e)
        }
    }
)

const profileSlice = createSlice({
    name: 'profileSlice',
    initialState: {
        userInfo: {}
    },
    reducers: {
        getusersInfo: (state, action) => {
            state.userInfo = action.payload
        }
    }
})
export const {getusersInfo} = profileSlice.actions
export default profileSlice.reducer