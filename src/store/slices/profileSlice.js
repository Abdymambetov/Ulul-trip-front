import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { closeEditProfileModal } from "./authSlice";


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
export const deleteProfileAction = createAsyncThunk(
    'deleteProfileAction',
    async (id, {dispatch, rejectWithValue}) => {
        try{
            const response = await axios.delete(`http://164.92.190.147:8880/profiles/profile/${id}/`, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).access}`
                }
            })
            if(response.status === 204) {
                const data = await response.data
                console.log(data)
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                window.location.assign('/')
            } else{
                throw Error (`error: ${response.status}`)
            }
        } catch(e) {
            alert(e)
        }
    }
)
export const changeProfileAction = createAsyncThunk(
    'changeProfile',
    async(user, {dispatch, rejectWithValue}) => {
        try{
            const {id} = JSON.parse(localStorage.getItem('token'))
            const response = await axios(
                {
                    method: 'PATCH',
                    url: `http://164.92.190.147:8880/profiles/change-password/${id}/`,
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).access}`
                    },
                    data: JSON.stringify(user)
                }
            )
            const data = await response.data
            console.log(data);
        } catch(e) {
            alert(e)
        }
    }
)
export const editProfileAction = createAsyncThunk(
    'editProfileAction',
    async(param, {dispatch, rejectWithValue}) => {
        try{
            const {id} = JSON.parse(localStorage.getItem('token'))
            const response = await axios({
                method: 'PUT',
                url: `http://164.92.190.147:8880/profiles/profile/${id}/`,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).access}`
                },
                data: JSON.stringify(param)
            })
            const data = await response.data
            if(response.status === 201) {
                localStorage.setItem('newUser', JSON.stringify(data))
                JSON.parse(localStorage.getItem('newUser'))
                dispatch(closeEditProfileModal())
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