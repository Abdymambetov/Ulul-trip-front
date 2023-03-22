import { Box, Modal } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeChangePassword } from '../../../../store/slices/authSlice'
import { changeProfileAction } from '../../../../store/slices/profileSlice'
import classes from './ChangePasswordModa.module.css'
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
function ChangePasswordModa() {
  const {changePasswordModal} = useSelector(state => state.modalTour)
  const dispatch = useDispatch()
  const closePasswordMod = () => {
    dispatch(closeChangePassword())
  }
  const [email, setEmail] = useState('')
  const [password_old, setPasswordOld] = useState('')
  const [password_new, setNewPassword] = useState('')
  const [password_new_again, setPasswordNewAgain] = useState('')

  const changeEmail = (event) => {
    setEmail(event.target.value)
  }
  const changePassword = (event)=> {
    setPasswordOld(event.target.value)
  }
  const changeNewPassword = (event) => {
    setNewPassword(event.target.value)
  }
  const changePasswordAgain = (event) => {
    setPasswordNewAgain(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const user = {email, password_old,  password_new, password_new_again}
    dispatch(changeProfileAction(user))
  }
 
  return (
    <Modal 
    open={changePasswordModal}
    onClose={closePasswordMod}
    >
      <Box sx={style}>
          <div className={classes.modal_inner}>
            <form onSubmit={handleSubmit}>
              <input type="text" name='email' placeholder='email' onChange={changeEmail}/>
              <input type="text" name='password_old' placeholder='old_password' onChange={changePassword}/>
              <input type="text" name='password_new' placeholder='new' onChange={changeNewPassword}/>
              <input type="text" name='password_new_again' placeholder='again' onChange={changePasswordAgain}/>
              <button onClick={handleSubmit}>Отпрвить</button>
            </form>
          </div>
      </Box>
    </Modal>
  )
}

export default ChangePasswordModa