import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        modal: false,
        comeInModal: false,
        cardModal: false
    }, 
    reducers: {
        openModal: (state, action) => {
            state.modal = true
        },
        closeModal: (state, action) => {
            state.modal = false
        },
        openComeInModal: (state, action) => {
            state.comeInModal = true
        },
        closeComeInModal: (state, action) => {
            state.comeInModal = false
        },
        openCardModal: (state, action) => {
            state.cardModal = true
        },
        closeCardModal: (state, action) => {
            state.cardModal = false
        }
    }
})

export const {openModal, closeModal, openComeInModal, closeComeInModal, openCardModal, closeCardModal} = authSlice.actions; 
export default authSlice.reducer