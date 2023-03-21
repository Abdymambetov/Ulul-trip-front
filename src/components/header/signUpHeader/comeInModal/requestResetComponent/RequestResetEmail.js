import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Box } from '@mui/material'
import { closeRequestResetEmailModal } from '../../../../../store/slices/authSlice'
import { useState } from 'react'
import { requestEmailAction } from '../../../../../store/slices/registerSlice'
const style = {
    width: '600px',
    height: '602px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(0.9)',
    bgcolor: '#FFFFFF',
    borderRadius: '24px',
    boxShadow: 24
}
function RequestResetEmail() {
    const {requestResetEmailModal} = useSelector(state => state.modalTour)
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()
    const closeResetEmail = () => {
        dispatch(closeRequestResetEmailModal())
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleCLick = (e) => {
        e.preventDefault()
        const param = {email}
        dispatch(requestEmailAction(param))
    }
  return (
    <Modal 
        open={requestResetEmailModal} 
        onClose={closeResetEmail}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ backdropFilter: 'blur(5px)' }}
    >
        <Box sx={style}>
            <div>
                <form onSubmit={handleCLick}>
                    <h2>Введите email</h2>
                    <input type="text" placeholder='email' onChange={handleEmailChange}/>
                    <button>Отправить</button>
                </form>
            </div>
        </Box>
    </Modal>
  )
}

export default RequestResetEmail