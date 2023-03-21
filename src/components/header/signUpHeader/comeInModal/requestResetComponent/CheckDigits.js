import React from 'react'
import { Modal, Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { closeCheckDigitsModal } from '../../../../../store/slices/authSlice'

function CheckDigits() {
    const {checkDigitsModal} = useSelector(state => state.modalTour)
    const dispatch = useDispatch()
    
  return (
    <Modal 
        open={checkDigitsModal}
        onClose = {() => dispatch(closeCheckDigitsModal)}
    >
        <Box>

        </Box>
    </Modal>
  )
}

export default CheckDigits