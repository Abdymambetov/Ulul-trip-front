import { Box, Modal } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeChangePassword } from '../../../../store/slices/authSlice'
import { changeProfileAction } from '../../../../store/slices/profileSlice'
import classes from './ChangePasswordModa.module.css'
import { useForm } from 'react-hook-form'
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
  // const {
  //   register,
  //   formState:{errors},
  //   handleSubmit,
  //   reset,
  // } = useForm({
  //   mode: "all"
  // });

  // const onSubmit = (data)=>{
  //   alert(JSON.stringify(data))
  //   reset()
  // }
 
 
  return (
    <Modal 
    open={changePasswordModal}
    onClose={closePasswordMod}
    >
      <Box sx={style}>
          <div className={classes.modal_inner}>
            <form className={classes.form} onSubmit={handleSubmit}>
            <input type="text" name='email' placeholder='email' onChange={changeEmail}/>
              <input type="text" name='password_old' placeholder='old_password' onChange={changePassword}/>
              <input type="text" name='password_new' placeholder='new' onChange={changeNewPassword}/>
              <input type="text" name='password_new_again' placeholder='again' onChange={changePasswordAgain}/>
              <button onClick={handleSubmit}>Отпрвить</button>
            
            {/* <div className={classes.error}>{errors?.Email && <p>{errors?.Email?.message}</p>}</div>
            <input placeholder='Email'
           {...register("Email",{
            required: "Email обязательно к заполнению",
            minLength: {
              value: 5,
              message: "минимум 5 символов"
            }
           })}
            />
            <div className={classes.error}>{errors?.PasswordOld && <p>{errors?.PasswordOld?.message}</p>}</div>
            <input placeholder='Password old'
           {...register("PasswordOld",{
            required: "пароль обязательно к заполнению",
            minLength: {
              value: 8,
              message: "пароль не может содержать символов, только цифры и буквы, должен быть не меньше 8 и не больше 16"
            }
           })}
            />
            <div className={classes.error}>{errors?.PasswordNew && <p>{errors?.PasswordNew?.message}</p>}</div>
            <input placeholder='Password new'
           {...register("PasswordNew",{
            required: "пароль обязательно к заполнению",
            minLength: {
              value: 8,
              message: "пароль не может содержать символов, только цифры и буквы, должен быть не меньше 8 и не больше 16"
            }
           })}
            />
            <div className={classes.error}>{errors?.PasswordNewAgain && <p>{errors?.PasswordNewAgain?.message}</p>}</div>
            <input placeholder='Password new again'
           {...register("PasswordNewAgain",{
            required: "пароль обязательно к заполнению",
            minLength: {
              value: 8,
              message: "пароль не может содержать символов, только цифры и буквы, должен быть не меньше 8 и не больше 16"
            }
           })}
            />  */}
            {/* <button >отправить</button> */}
            </form>
          </div>
      </Box>
    </Modal>
  )
}

export default ChangePasswordModa