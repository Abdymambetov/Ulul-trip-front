import React from 'react'
import { Modal, Box, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { closeEditProfileModal } from '../../../../store/slices/authSlice'
import { useState } from 'react'
import { editProfileAction } from '../../../../store/slices/profileSlice'
import classes from "./EditProfileModal.module.css"
import croosImg from '../../../../images/modalImg/Cross2.svg'
const style = {
    width: '400px',
    height: '500px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(1.05)',
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
}
function EditProfileModal() {
    const dispatch = useDispatch()
    const {editProfileModal} = useSelector(state => state.modalTour)
    const closeEdit = () => {
        dispatch(closeEditProfileModal())
    }
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')

    const changeUsername = (e) => {
        setUsername(e.target.value)
    }
    const changeEmail = (e) => {
        const emailValue = e.target.value.trim()
        setEmail(emailValue)
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (!re.test(String(emailValue).toLowerCase())) {
            setEmailError('Некоректный емейл')
        } else {
            setEmailError('')
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const param = {username, email}
        dispatch(editProfileAction(param))
    }
  return (
    <Modal
    open={editProfileModal}
    onClose={closeEdit}
    
    >
        <Box sx={style}>
            <div className={classes.editProfile}>
            <div className={classes.cross_parent}>
                <img
                    src={croosImg}
                    alt="cross"
                    onClick={closeEdit}
                    className={classes.croos_ulul}
                />
            </div>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <p className={classes.text_form}>Редактировать профиль</p>
                    <TextField
                        id="outlined-basic"
                        label="username"
                        variant="outlined"
                        name="username"
                        className={classes.inputs_modal}
                        value={username}
                        onChange={changeUsername}
                        sx={{
                            '& .MuiInputBase-root': {
                                borderRadius: '10px',
                                width: '300px',
                                marginBottom: '20px'
                            }
                        }}
                    />
                    {emailError && (
                        <span>{emailError}</span>
                    )}
                    <TextField
                        id="outlined-basic"
                        label="email"
                        variant="outlined"
                        name="email"
                        className={classes.inputs_modal}
                        value={email}
                        onChange={changeEmail}
                        sx={{
                            '& .MuiInputBase-root': {
                                borderRadius: '10px',
                                width: '300px',
                                marginBottom: '20px'
                            }
                        }}
                    />
                    <button onClick={handleSubmit}>Изменить профиль</button>
                </form>
            </div>
        </Box>
    </Modal>
  )
}

export default EditProfileModal