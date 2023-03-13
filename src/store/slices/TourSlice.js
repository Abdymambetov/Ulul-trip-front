import { RepeatOneSharp } from "@mui/icons-material";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { links } from "../../links/Links";
import { tourLinks } from "../../links/TourLinks";

export const categoryAction = createAsyncThunk(
    'categoryAction',
    async(param, {dispatch, rejectWithValue}) => {
        try{
            const response = await axios.get(tourLinks.category)
            if (response.status === 200) {
                const data = await response.data.results
                dispatch(addCategoryArr(data))
            } else {
                throw Error(`error: ${response.status}`)
            }
        } catch(e) {
            alert(e)
        }
    }
)
 export const horseTourAction = createAsyncThunk(
    'horseTourAction',
    async (param, {dispatch, rejectWithValue}) => {
        try{
            const response = await axios('http://164.92.190.147:8880/home/tours/?category=konnyj-tur')
            if(response.status === 200){
                const data = await response.data.results
                console.log(data);
                dispatch(getHorseArr(data))
            } else{
                throw Error(`error: ${response.status}`)
            }
        } catch(e){
            alert(e)
        }
    }
 )
 
 export const jeepsToursAction = createAsyncThunk(
    'jeepsToursSlice',
    async (param, {dispatch, rejectWithValue}) => {
        try{
            const response = await axios ('http://164.92.190.147:8880/home/tours/?category=d')
            if(response.status === 200) {
                const data = await response.data.results
                console.log(data)
                dispatch(getJeepToursArr(data))
            } else {
                throw Error (`error: ${response.status}`)
            }
        } catch(e) {
            alert(e)
        }
    }
 )
export const peshijTurAction = createAsyncThunk(
    'peshijTurAction', 
    async (param, {dispatch, rejectWithValue}) => {
        try{
            const response = await axios('http://164.92.190.147:8880/home/tours/?category=peshij-tur')
            if(response.status === 200) {
                const data = await response.data.results
                console.log(data)
                dispatch(getPeshijTutArr(data))

            } else{
                throw Error (`error: ${response.status}`)
            }
        } catch(e) {

        }
    }
)
export const veloTutAction = createAsyncThunk(
    'veloTutAction',
    async (param, {dispatch, rejectWithValue}) => {
        try{
            const reponse = await axios('http://164.92.190.147:8880/home/tours/?category=velotur')
           if(reponse.status === 200) {
                const data = await reponse.data.results
                console.log(data)
                dispatch(getVeloTutArr(data))
           } else{
            throw Error (`error: ${reponse.status}`)
           }
        } catch(e) {
            alert(e)
        }
    }
)
const tourSlice = createSlice({
    name: 'tourSLice',
    initialState: {
        tourArr: [],
        categoryArr: [],
        horseArr: [],
        jeepTourArr: [],
        peshijTurArr: [],
        veloTurArr: []
    }, reducers: {
        addTour: (state, action) => {
            state.tourArr = action.payload
        }, 
        addCategoryArr: (state, action) => {
            state.categoryArr = action.payload
        },
        getHorseArr: (state, action) => {
            state.horseArr = action.payload
        }, 
        getJeepToursArr: (state, action) => {
            state.jeepTourArr = action.payload
        },
        getPeshijTutArr: (state, action) => {
            state.peshijTurArr = action.payload
        },
        getVeloTutArr: (state, action) => {
            state.veloTurArr = action.payload
        }
    }
})
export const {addTour, addCategoryArr, getHorseArr, getJeepToursArr, getPeshijTutArr, getVeloTutArr} = tourSlice.actions
export default tourSlice.reducer