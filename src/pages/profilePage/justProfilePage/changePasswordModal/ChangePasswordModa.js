import { Box, Modal, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeChangePassword } from '../../../../store/slices/authSlice'
import { changeProfileAction } from '../../../../store/slices/profileSlice'
import classes from './ChangePasswordModa.module.css'
import croosImg from '../../../../images/modalImg/Cross2.svg'
import openEye from '../../../../images/modalImg/Property 1=Default.svg'
import closeEye from '../../../../images/modalImg/Property 1=Variant2.svg'
import "swiper/swiper-bundle.css"
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
  const [eye, setEye] = useState(closeEye)
  const [type, setType] = useState('password')
  const [newPassEye, setNewPassEye] = useState(closeEye)
  const [newPassType, setnewPassType] = useState('password')
  const [testType, setTestType] = useState('password')
  const [testEye, setTestEye] = useState(closeEye)
  const {changePasswordModal} = useSelector(state => state.modalTour)
  const dispatch = useDispatch()
  const closePasswordMod = () => {
    dispatch(closeChangePassword())
  }
  const [email, setEmail] = useState('')
  const [password_old, setPasswordOld] = useState('')
  const [password_new, setNewPassword] = useState('')
  const [password_new_again, setPasswordNewAgain] = useState('')
  const [emailError, setEmailError] = useState('')
  const [oldPasswordError, setOldPasswordError] = useState('')
  const [newPasswordError, setNewPasswordError] = useState('')
  const [againPasswordError, setAgainPasswordError]= useState('')
  const [formValid, setFormValid] = useState(false)
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  
  const handleOldPassword = () => {
    if (type === 'password') {
        setType('text')
        setEye(openEye)
    } else {
        setType('password')
        setEye(closeEye)
    }
}
const handleNewPassword = () => {
    if(newPassType === 'password') {
      setnewPassType('text')
      setNewPassEye(openEye)
    } else{
      setnewPassType('password')
      setNewPassEye(closeEye)
    }
}
const handleTestPassword = () => {
    if (testType === 'password') {
        setTestType('text')
        setTestEye(openEye)
    } else {
        setTestType('password')
        setTestEye(closeEye)
    }
}
  const changeEmail = (event) => {
    const emailValue = event.target.value.trim()
        setEmail(emailValue)
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (!re.test(String(emailValue).toLowerCase())) {
            setEmailError('Некоректный емейл')
        } else {
            setEmailError('')
        }
  }   
  const changePassword = (event)=> {
    const passwordValue = event.target.value.trim()
        setPasswordOld(passwordValue)
        if (
            passwordValue.trim().length < 8 ||
            passwordValue.trim().length > 16
        ) {
            setOldPasswordError('Пароль должен быть не меньше 8 и не больше 16')
        } else if (!/^[a-zA-Z0-9]*$/.test(passwordValue)) {
            setOldPasswordError('Пароль должен содержать только буквы и цифры')
        } else {
            setOldPasswordError('')
        }
  }
  const changeNewPassword = (event) => {
    const newPasswordValue = event.target.value.trim()
        setNewPassword(newPasswordValue)
        if (
            newPasswordValue.trim().length < 8 ||
            newPasswordValue.trim().length > 16
        ) {
            setNewPasswordError('Пароль должен быть не меньше 8 и не больше 16')
        } else if (!/^[a-zA-Z0-9]*$/.test(newPasswordValue)) {
            setNewPasswordError('Пароль должен содержать только буквы и цифры')
        } else if(newPasswordValue === password_old) {
            setNewPasswordError('Новый пароль не должен быть похож на старый')
        } else {
            setNewPasswordError('')
            setFormValid(password_new_again === newPasswordValue)
            setAgainPasswordError('')
        }
  }
  const changePasswordAgain = (event) => {
    setPasswordNewAgain(event.target.value.trim());
    if (event.target.value !== password_new) {
      setAgainPasswordError('Пароль не совпадает, введите пароль, который вы указали выше');
      return;
    } else {
      setAgainPasswordError('');
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const user = {email, password_old,  password_new, password_new_again}
    dispatch(changeProfileAction(user))
  }
  useEffect(() => {
    if (isFormSubmitted) {
        setFormValid(
                email.trim().length > 0 &&
                password_old.trim().length > 8 &&
                password_new.trim().length > 8 &&
                emailError === '' &&
                newPasswordError === '' &&
                againPasswordError === '' &&
                oldPasswordError === '' 
        )
    } else {
        setFormValid(
                password_old.trim().length > 8 &&
                email.trim().length > 0 &&
                password_new.trim().length > 0 &&
                password_new_again.trim() === password_new.trim()
        )
    }
}, [
    
    password_old,
    email,
    emailError,
    password_new,
    password_new_again,
    oldPasswordError,
    newPasswordError,
    againPasswordError,
    isFormSubmitted,
])

 
  return (
    <Modal 
    open={changePasswordModal}
    onClose={closePasswordMod}
    >
      <Box sx={style}>
          <div className={classes.modal_inner}>
          <div className={classes.cross_parent}>
                <img
                    src={croosImg}
                    alt="cross"
                    onClick={closePasswordMod}
                    className={classes.croos_ulul}
                />
            </div>
            <form className={classes.form} onSubmit={handleSubmit}>
              <p className={classes.text_form}>Изменить пароль</p>
              {emailError && (
                  <span className={classes.span_email}>
                    {emailError}
                  </span>
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
                    marginBottom: '20px',
                    paddingRight: '45px'
                  }
                }}
              /> 
               {oldPasswordError && (
                  <span className={classes.old_password_span}>
                    {oldPasswordError}
                  </span>
              )}
              <div className={classes.inputs_modal_password}>
                <TextField
                  id="outlined-basic"
                  label="oldPassword"
                  variant="outlined"
                  name="password_old"
                  className={classes.inputs_modal}
                  value={password_old}
                  type={type}
                  onChange={changePassword}
                  sx={{
                    '& .MuiInputBase-root': {
                      borderRadius: '10px',
                      width: '300px',
                      marginBottom: '20px',
                      paddingRight: '45px'
                    }
                  }}
                /> 
                 <img
                  src={eye}
                  alt="openEye"
                  className={classes.eyes_modal}
                  onClick={handleOldPassword}
                />
              </div>
              {newPasswordError && (
                  <span className={classes.new_password_span}>
                    {newPasswordError}
                  </span>
              )}
              <div className={classes.inputs_modal_password}>
                <TextField
                  id="outlined-basic"
                  label="newPassword"
                  variant="outlined"
                  name="password_new"
                  className={classes.inputs_modal}
                  value={password_new}
                  type={newPassType}
                  onChange={changeNewPassword}
                  sx={{
                    '& .MuiInputBase-root': {
                      borderRadius: '10px',
                      width: '300px',
                      marginBottom: '20px',
                      paddingRight: '45px'
                    }
                  }}
                /> 
                <img 
                  src={newPassEye} 
                  alt="eyePassword"
                  className={classes.eyes_modal} 
                  onClick={handleNewPassword}
                />
              </div>
              {
                againPasswordError && (
                  <span>
                    {againPasswordError}
                  </span>
                )
              }
              <div className={classes.inputs_modal_password}>
                <TextField
                  id="outlined-basic"
                  label="again"
                  variant="outlined"
                  name="password_new_again"
                  className={classes.inputs_modal}
                  value={password_new_again}
                  type={testType}
                  onChange={changePasswordAgain}
                  sx={{
                    '& .MuiInputBase-root': {
                      borderRadius: '10px',
                      width: '300px',
                      marginBottom: '20px',
                      paddingRight: '45px'
                    }
                  }}
                />
                <img 
                  src={testEye} 
                  alt="eyePassword" 
                  className={classes.eyes_modal} 
                  onClick={handleTestPassword}
                />
              </div>
              <button 
                onClick={handleSubmit} 
                type="submit"
                disabled={!formValid}
                style={{
                backgroundColor:
                formValid === true
                ? '#ff6f32'
                : '#c3c3c3'
              }}>Отпрвить</button>
            
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