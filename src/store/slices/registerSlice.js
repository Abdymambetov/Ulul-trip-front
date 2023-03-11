import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { links } from "../../links/Links";
import { openComeInModal } from "./authSlice";


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
            const data = await response.data
            if(data.status>=200 && data.status<400){
                // dispatch(CorrectSignUp())
                dispatch(openComeInModal())
            }else{
                alert('try again')
                throw Error('something is invalid')
                
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
const registerSlice = createSlice({
    name: 'registerSlice',
    initialState: {
        signUp: false,
        logIn: JSON.parse(localStorage.getItem('user')).access ? true: false
    },
    reducers: {
        CorrectSignUp: (state, action) => {
            state.signIn = true
        },
        ErrorSignUp: (state, action) => {
            state.signUp = false
        },
        // CorrectLogIn: (state, action) => {
        //     state.logIn = true
        // },
        // ErrorLogIn: (state, action)=> {
        //     state.logIn = false
        // }
    }
})
// export const {CorrectSignUp, ErrorSignUp, CorrectLogIn, ErrorLogIn} = registerSlice.actions
export default registerSlice.reducer
