import React, { useState } from 'react'
import { Modal, Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { closePasswordResetModal } from '../../../../../store/slices/authSlice'
import { passwordResetAction } from '../../../../../store/slices/registerSlice'
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
function PasswordReset() {
    const [password, setPassword] = useState('')
    const [password_repeat, setPasswordRepeat] = useState('')
    const {passwordResetModal} = useSelector(state => state.modalTour)
    const dispatch = useDispatch()
    const closePasswordModal = () => {
        dispatch(closePasswordResetModal())
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const changePasswordRepeat = (e) => {
        setPasswordRepeat(e.target.value)
    }
    const hadleSubmitPassword = (e) => {
        e.preventDefault()
        const uidb64 = localStorage.getItem('uidb64')
        const param ={password, password_repeat, uidb64}
        dispatch(passwordResetAction(param))
    }
  return (
    <Modal 
    open={passwordResetModal}
    onClose={closePasswordModal}
    >
        <Box sx={style}>
            <div>
                <input type="text" onChange={changePassword}/>
                <input type="text" onChange={changePasswordRepeat}/>
                <button onClick={hadleSubmitPassword}>Отправить</button>
            </div>
        </Box>
    </Modal>
  )
}

export default PasswordReset