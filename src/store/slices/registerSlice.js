import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { links } from "../../links/Links";
import { closeComeInModal, closeModal, openComeInModal } from "./authSlice";


export const signUpAction = createAsyncThunk(
    'signUpAction',
    async (param, { dispatch, rejectWithValue }) => {
        try {
            const response = await axios({
                method: 'POST',
                url: links.signUp,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(param)
            })
            const data = await response
            if(data.status >= 201) {
                // dispatch(CorrectSignUp())
                console.log(data.data);
                localStorage.setItem('token', JSON.stringify(data.data.user))
                console.log(JSON.parse(localStorage.getItem('token')))
                dispatch(closeModal())
                dispatch(openComeInModal())
                alert(data.data.message)
            }
        } catch(e){
            alert(e)
            // dispatch(ErrorSignUp())
        }finally{

        }
    }
)

export const logAction = createAsyncThunk(
    'logAction',
    async (param, { dispatch, rejectWithValue }) => {
        try {
            const response = await axios({
                method: 'POST',
                url: links.login,
                headers: { 'Content-type': 'application/json' },
                data: JSON.stringify(param)
            })
            const data = await response
            
            if(data.status >= 200 && data.status < 400) {
                    // dispatch(CorrectLogIn())
                    dispatch(closeComeInModal())
                    localStorage.setItem('user',data.data.tokens.replace(/'/g,'"'))
                    // localStorage.setItem('user', )
                    // const userTokens = JSON.parse(localStorage.getItem('user'));
                    // const accessToken = userTokens.access;
                    // const refreshToken = userTokens.refresh;
                    // console.log(JSON.parse( accessToken));
                    // console.log(JSON.parse(refreshToken));
            } else{
                throw Error('error')
            }
        } catch (e) {
            alert(e)
            // dispatch(ErrorLogIn())
        }
    }
)
export const refreshToken = createAsyncThunk(
    'refreshToken',
    async (_, { dispatch, getState, rejectWithValue }) => {
        try {
            const response = await axios.post('http://164.92.190.147:8880/users/refresh/', {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).refresh}` 
                } 
            })
            console.log(response);
            const data = await response.data
            localStorage.setItem('user', JSON.stringify(data))
            return data.access
        } catch (error) {
            if (!error.response) {
                throw error
            }
            const { data } = error.response
            return rejectWithValue(data)
        }
    }
)
export const fetchUser = createAsyncThunk(
    'fetchUser',
    async (_, { dispatch, getState, rejectWithValue }) => {
        const { access } = JSON.parse(localStorage.getItem('user'))
        try {
            const response = await axios.get('http://164.92.190.147:8880/profiles/profile/', {
                headers: { Authorization: `Bearer ${access}` }
            })
            return response.data
        } catch (error) {
            if (error.response && error.response.status === 401) {
                try {
                    await dispatch(refreshToken())
                    const newAccessToken = getState().auth.accessToken
                    const response = await axios.get('/user', {
                        headers: { Authorization: `Bearer ${newAccessToken}` }
                    })
                    return response.data
                } catch (error) {
                    return rejectWithValue(error.response.data)
                }
            } else {
                return rejectWithValue(error.response.data)
            }
        }
    }
)
const registerSlice = createSlice({
    name: 'registerSlice',
    initialState: {
        signUp: false,
        logIn: JSON.parse(localStorage.getItem('user')) ? true: false
    },
    reducers: {
        CorrectSignUp: (state, action) => {
            state.signIn = true
        },
        ErrorSignUp: (state, action) => {
            state.signUp = false
        }
        // CorrectLogIn: (state, action) => {
        //     state.logIn = true
        // },
        // ErrorLogIn: (state, action)=> {
        //     state.logIn = false
        // }
    }
})
export const {CorrectSignUp, ErrorSignUp, CorrectLogIn, ErrorLogIn} = registerSlice.actions
export default registerSlice.reducer
