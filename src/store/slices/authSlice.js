import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        modal: false,
        comeInModal: false,
        cardModal: false,
        likesModal: false,
        reviewsModal: false,
        reservationModal: false,
        deleteModal: false,
        changePasswordModal: false,
        editProfileModal: false,
        cardInfo: null,
        requestResetEmailModal: false,
        checkDigitsModal: false,
        passwordResetModal: false,
        confidentalityModal: false
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
        openDeleteModal: (state, action) => {
            state.deleteModal = true
        }, 
        closeDeleteModal: (state, action) => {
            state.deleteModal = false
        },
        openChangePasswordModal: (state, action) => {
            state.changePasswordModal = true
        },
        closeChangePassword: (state, action) => {
            state.changePasswordModal = false
        },
        openEditProfileModal: (state, action) => {
            state.editProfileModal = true
        },
        closeEditProfileModal: (state, acition) => {
            state.editProfileModal = false
        }, 
        openRequestResetEmailModal: (state, action) => {
            state.requestResetEmailModal = true
        },
        closeRequestResetEmailModal: (state, action) => {
            state.requestResetEmailModal = false
        }, 
        openCheckDigitsModal: (state, action) => {
            state.checkDigitsModal =true
        }, 
        closeCheckDigitsModal: (state, action) => {
            state.checkDigitsModal = false
        },
        openReservationModal : (state, action) => {
            state.reservationModal = true
        },
        closeResevationModal: (state,action) => {
            state.reservationModal = false
        },
        openPasswordResetModal: (state, action) => {
            state.passwordResetModal = true
        }, 
        closePasswordResetModal: (state, action) => {
            state.passwordResetModal = false
        }, 
        openConfidentalityModal: (state, action) => {
            state.confidentalityModal = true
        },
        closeConfidentalityModal: (state, action) => {
            state.confidentalityModal = false
        }
    }
})

export const {
    openModal, 
    closeModal, 
    openComeInModal, 
    closeComeInModal, 
    openCardModal, 
    closeCardModal, 
    openLikesModal, 
    closeLikesModal, 
    openReviewsModal, 
    closeReviewsModal, 
    openDeleteModal, 
    closeDeleteModal,
    openChangePasswordModal,
    openReservationModal,
    closeResevationModal,
    closeChangePassword,
    openEditProfileModal,
    closeEditProfileModal,
    openRequestResetEmailModal,
    closeRequestResetEmailModal,
    openCheckDigitsModal,
    closeCheckDigitsModal, 
    openPasswordResetModal,
    closePasswordResetModal,
    openConfidentalityModal,
    closeConfidentalityModal   
} = authSlice.actions; 
export default authSlice.reducer