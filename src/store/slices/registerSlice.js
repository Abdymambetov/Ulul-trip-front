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
                localStorage.setItem('token', JSON.stringify(data))
                console.log( JSON.parse(localStorage.getItem('token')))
                console.log(data);
               
        } catch(e){

        }finally{

        }
    }
)
const registerSlice = createSlice({
    name: 'registerSlice',
    initialState: {
        signIn: JSON.parse(localStorage.getItem('token'))?.token ? true : false,
    },
    reducers: {

    }
})
export default registerSlice.reducer