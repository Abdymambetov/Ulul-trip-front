import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Box, TextField } from '@mui/material'
import { closeRequestResetEmailModal } from '../../../../../store/slices/authSlice'
import { useState } from 'react'
import { requestEmailAction } from '../../../../../store/slices/registerSlice'
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
            <div className={classes.email_inner}>
            <div className={classes.cross_parent}>
                <img
                    src={croosImg}
                    alt="cross"
                    onClick={closeResetEmail}
                    className={classes.croos_ulul}
                />
            </div>
                <form onSubmit={handleCLick} className={classes.from_inputs}>
                    <h2 className={classes.text_email}>Введите email</h2>
                    <TextField 
                    id="outlined-basic"
                    label="email"
                    variant="outlined"
                    name="email"
                    value={email}
                    sx={{
                        '& .MuiInputBase-root': {
                            borderRadius: '10px',
                            width: '402px',
                            marginBottom: '20px'
                        }
                    }}
                    onChange={handleEmailChange}/>
                    <button className={classes.btn_from}>Отправить</button>
                </form>
            </div>
        </Box>
    </Modal>
  )
}

export default RequestResetEmail