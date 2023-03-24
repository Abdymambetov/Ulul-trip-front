import React, { useState } from 'react'
import { Modal, Box, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { closePasswordResetModal } from '../../../../../store/slices/authSlice'
import { passwordResetAction } from '../../../../../store/slices/registerSlice'
import classes from './RequestReset.module.css'
import croosImg from '../../../../../images/modalImg/Cross2.svg'

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
            <div className={classes.cross_parent}>
                <img
                    src={croosImg}
                    alt="cross"
                    onClick={closePasswordModal}
                    className={classes.croos_ulul}
                />
            </div>
                <form className={classes.from_inputs}>
                    <h2 className={classes.text_email}>Введите новый пароль</h2>
                    <TextField
                     id="outlined-basic"
                     label="password"
                     variant="outlined"
                     name="password"
                     value={password}
                     onChange={changePassword}
                     sx={{
                         '& .MuiInputBase-root': {
                             borderRadius: '10px',
                             width: '300px',
                             marginBottom: '20px'
                         }
                     }}/>
                     <TextField
                     id="outlined-basic"
                     label="repeat"
                     variant="outlined"
                     name="password_repeat"
                     value={password_repeat}
                     onChange={changePasswordRepeat}
                     sx={{
                         '& .MuiInputBase-root': {
                             borderRadius: '10px',
                             width: '300px',
                             marginBottom: '20px'
                         }
                     }}/>
                     <button onClick={hadleSubmitPassword} className={classes.btn_from}>Отправить</button>
                </form>
            </div>
        </Box>
    </Modal>
  )
}

export default PasswordReset