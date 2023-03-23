import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { links } from "../../links/Links";
import { closeCheckDigitsModal, closeComeInModal, closeModal, closePasswordResetModal, closeRequestResetEmailModal, openCheckDigitsModal, openComeInModal, openPasswordResetModal } from "./authSlice";


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
export const requestEmailAction = createAsyncThunk(
    'requestEmailAction',
    async(param, {dispatch, rejectWithValue}) => {
        try{
            const response = await axios({
                method: 'POST',
                url: 'http://164.92.190.147:8880/users/request-reset-email/',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(param)
            })
            if(response.status === 200) {
                const data = await response.data
                console.log(data)
                alert(data.success)
                dispatch(closeComeInModal())
                dispatch(closeRequestResetEmailModal())
                dispatch(openCheckDigitsModal())
                localStorage.setItem('uidb64', JSON.stringify(data.uidb64))
            } else{
                throw Error('error')
            }
        } catch(e) {
            alert(e)
        }
    }
)
export const chechDigitsAction = createAsyncThunk(
    'chechDigitsAction',
    async(digits, {dispatch, rejectWithValue}) => {
        const uidb64 = localStorage.getItem('uidb64')
        const param = {digits, uidb64}
        console.log(param)
        try{
            const response = await axios({
                method: 'POST',
                url: 'http://164.92.190.147:8880/users/check-digits/',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(param)
            })
            if(response.status === 200){
                const data = await response.data
                alert(data.message)
                dispatch(closeCheckDigitsModal())
                dispatch(openPasswordResetModal())
            } 
        } catch(e) {
            alert(e)
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
            console.log(response)
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
export const passwordResetAction = createAsyncThunk(
    'passwordResetAction',
    async(param, {dispatch, rejectWithValue}) => {
        console.log(param);
        try{
            const response = await axios({
                method: 'PATCH',
                url: 'http://164.92.190.147:8880/users/password-reset-complete/',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(param)
            })
            if(response.status === 200) {
                const data = await response.data
                console.log(data);
                alert(data.message)
                dispatch(closePasswordResetModal())
                dispatch(openComeInModal())
            }
        } catch(e) {
            alert(e)
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
