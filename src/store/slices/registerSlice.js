import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { links } from "../../links/Links";


export const signUpAction = createAsyncThunk(
    'signUpAction',
    async (param, {dispatch, rejectWithValue})=>{
        try{
            const response = await axios({
                method: 'POST',
                url: links.signUp,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(param)
            })
            const data = await response.data
                localStorage.setItem('token', JSON.stringify(data.tokens))
                console.log( JSON.parse(localStorage.getItem('token').tokens))
                console.log(data);
               
        } catch(e){

        }finally{

        }
    }
)

export const logAction = createAsyncThunk(
    'logAction',
    async (param, {dispatch, rejectWithValue}) => {
        try{
            const response = await axios({
                method:'POST',
                url:links.login,
                headers:{'Content-type':'application/json'},
                data: JSON.stringify(param)
            })
            const data = await response
            if(data.status >= 200 && data.status < 400){
                    localStorage.setItem('user', JSON.stringify(data))
                    JSON.parse(localStorage.getItem('user'))
                 
            } else{
                throw Error('error')
            }
        } catch(e){
            alert(e)
        }
    }
)
const registerSlice = createSlice({
    name: 'registerSlice',
    initialState: {
        signIn: JSON.parse(localStorage.getItem('user'))?.tokens ? true : false,
    },
    reducers: {

    }
})
export default registerSlice.reducer