import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        modal: false,
        comeInModal: false,
        cardModal: false,
        likesModal: false,
        reviewsModal: false,
        cardInfo: null
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
            state.cardInfo =action.payload
        },
        closeCardModal: (state, action) => {
            state.cardModal = false
        },
        openLikesModal: (state, action) => {
            state.likesModal = true
        },
        closeLikesModal: (state, action) => {
            state.likesModal = false
        },
        openReviewsModal: (state,action) => {
            state.reviewsModal = true
        },
        closeReviewsModal: (state,action) => {
            state.reviewsModal = false
        },
    }
})

export const {openModal, closeModal, openComeInModal, closeComeInModal, openCardModal, closeCardModal, openLikesModal, closeLikesModal, openReviewsModal, closeReviewsModal} = authSlice.actions; 
export default authSlice.reducer