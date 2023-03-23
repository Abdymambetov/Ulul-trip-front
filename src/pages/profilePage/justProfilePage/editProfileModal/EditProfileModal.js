import React from 'react'
import { Modal, Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { closeEditProfileModal } from '../../../../store/slices/authSlice'
import { useState } from 'react'
import { editProfileAction } from '../../../../store/slices/profileSlice'
import classes from "./EditProfileModal.module.css"
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
    overflow: 'auto'
}
function EditProfileModal() {
    const dispatch = useDispatch()
    const {editProfileModal} = useSelector(state => state.modalTour)
    const closeEdit = () => {
        dispatch(closeEditProfileModal())
    }
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    const changeUsername = (e) => {
        setUsername(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
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
                <form className={classes.form} onSubmit={handleSubmit}>f
                    <input type="text" name='username' placeholder='username' onChange={changeUsername}/>
                    <input type="text" name='email' placeholder='email' onChange={changeEmail} />
                    <button onClick={handleSubmit}>Изменить профиль</button>
                </form>
            </div>
        </Box>
    </Modal>
  )
}

export default EditProfileModal