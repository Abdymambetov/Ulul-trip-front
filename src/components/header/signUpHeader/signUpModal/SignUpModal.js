import React, { useEffect } from 'react'
import classes from './SignUModal.module.css'
import { Modal, Box, TextField} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../../../store/slices/authSlice';
import crossIcon from '../../../../images/modalImg/Cross2.svg';
import Ulul from '../../../../images/modalImg/Ulul.svg'
import SignUp from './SignUp';
import openEye from '../../../../images/modalImg/Property 1=Default.svg'
import closeEye from '../../../../images/modalImg/Property 1=Variant2.svg'
import { useState } from 'react';
import googleSvg from '../../../../images/modalImg/Google.svg'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
const style = {
    width: '500px',
    height: '740px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(1.05)',
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
  };
  const inputInner=[
      {
          label:'Имя',
          name:'name'
      },{
          label:'Фамилия',
          name:'username'
      },{
          label:'Эл.почта',
          name:'email',
      }
]
function SignUpModal() {
    const [eye, setEye] = useState(closeEye)
    const [type, setType] = useState('password')
    const [testType, setTestType] = useState('password')
    const [testEye, setTestEye] = useState(closeEye)
    const dispatch = useDispatch()
    const {modal} = useSelector(state => state.modalTour)
    const handleClose = () => {
        dispatch(closeModal())
    }
    const handlePassword =() => {
        if(type === 'password') {
            setType('text')
            setEye(openEye)
        } else{
            setType('password')
            setEye(closeEye)
        }
    }
    const handleTestPassword = () => {
        if(testType === 'password') {
            setTestType('text')
            setTestEye(openEye)
        } else{
            setTestType('password')
            setTestEye(closeEye)
        }
    }

    // Валидация 
    const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Дополнительные переменные состояния для хранения сообщений об ошибках и состояния кнопки отправки формы.
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const [formValid, setFormValid] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Обработчики изменения состояния для каждого поля формы.
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
    
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleEmailChange(event) {
    const emailValue = event.target.value.trim();
    setEmail(emailValue);
    const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(emailValue).toLowerCase())) {
      setEmailError('Некоректный емейл');
    } else {
      setEmailError('');
    }
  }

  function handlePasswordChange(event) {
    const passwordValue = event.target.value.trim();
    setPassword(passwordValue);
  
    if (passwordValue.trim().length < 8 || passwordValue.trim().length > 16) {
      setPasswordError('Пароль должен быть не меньше 8 и не больше 16');
    
    } else if (!/^[a-zA-Z0-9]*$/.test(passwordValue)) {
      setPasswordError('Пароль должен содержать только буквы и цифры');
      
    } else {
      setPasswordError('');
      setFormValid(confirmPassword === passwordValue);

    }
  }
  
  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value.trim());
    if (event.target.value !== password) {
      setConfirmPasswordError('Пароль не совпадает, введите пароль, который вы указали выше');
      return;
    } else {
      setConfirmPasswordError('');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  
    // Выполнение проверки формы перед отправкой.
    if (password !== confirmPassword) {
      setPasswordError('Пароли не совпадают');
      console.log('hi');
      return;
    }
  
    if (emailError || passwordError || confirmPasswordError) {
      return;
    }
  
    setIsFormSubmitted(true);
    // Здесь можно отправить данные формы на сервер.
  }

  useEffect(() => {
    if (isFormSubmitted) {
      setFormValid(
        firstName.trim().length > 0 &&
        lastName.trim().length > 0 &&
        email.trim().length > 0 &&
        password.trim().length > 0 &&
        confirmPassword.trim().length > 0 &&
        emailError === '' && 
        passwordError === '' &&
        confirmPasswordError === ''
      );
    } else {
      setFormValid(
        firstName.trim().length > 0 &&
        lastName.trim().length > 0 &&
        email.trim().length > 0 &&
        password.trim().length > 0 &&
        confirmPassword.trim() === password.trim()
      );
    }
  }, [firstName, lastName, email, password, confirmPassword, emailError, passwordError, isFormSubmitted, confirmPasswordError]);
  return (
    <div>
         <Modal
            open={modal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{backdropFilter: 'blur(5px)'}}
        >
            <Box sx={style}>
                <form onSubmit={handleSubmit}>
                    <div className={classes.modal_div}>
                        <div className={classes.first_block}>
                            <div className={classes.second_block}>
                                <img src={Ulul} alt="ulul" className={classes.ulul_img}/>
                                <h1 className={classes.signUp_text}>Регистрация</h1>
                            </div>
                            <div className={classes.cross_parent}>
                                <img src={crossIcon} alt="cross" onClick={handleClose} className={classes.cross_img} />
                            </div>                           
                        </div>
                       
                        <div className={classes.all_inputs}>
                            <div className={classes.one_inputs} >
                                <TextField id="outlined-basic" label="Имя" variant="outlined" name='name'  className={classes.inputs_modal} value={firstName}
                                sx={{
                                    '& .MuiInputBase-root':{
                                        borderRadius:"10px",
                                        width: '402px'
                                    }, 
                                }} 
                                onChange={handleFirstNameChange}
                                />
                            </div>
                            <div className={classes.one_inputs}>
                                <TextField id="outlined-basic" label="Фамилия" variant="outlined" name='lastname' value={lastName} sx={{
                                    '& .MuiInputBase-root':{
                                        borderRadius:"10px",
                                        width: '402px'
                                    }
                                }}  className={classes.inputs_modal} 
                                onChange={handleLastNameChange}
                                />
                            </div>
                            <div className={classes.one_inputs_email}>
                                {emailError && <span className={classes.span_email}>{emailError}</span>}
                                <TextField id="outlined-basic" label="Эл.почта" placeholder='@' variant="outlined" name='email' value={email} className={classes.inputs_modal_email} 
                                sx={{
                                    '& .MuiInputBase-root':{
                                        borderRadius:"10px",
                                        width: '402px',
                                    }, 
                                    
                                }}
                                onChange={handleEmailChange}
                                />
                            </div>
                            {/* {inputInner.map(item=><SignUp  name={item.name} label={item.label}/>)} */}
                            <div className={classes.inputs_modal_password}>
                                {passwordError && <span>{passwordError}</span>}
                                <TextField id="outlined-basic" label="Пароль" variant="outlined" name='password' value={password} type={type} className={classes.inputs_modal} sx={{
                                    '& .MuiInputBase-root':{
                                        borderRadius:"10px",
                                        width: '402px'
                                    }
                                    
                                }} 
                                onChange={handlePasswordChange}
                                />
                                <img src={eye} alt="openEye" className={classes.eyes_modal} onClick={handlePassword}/>
                            </div>
                            <div className={classes.inputs_pas_test}>
                                {confirmPasswordError && <span>{confirmPasswordError}</span>}
                                <TextField id="outlined-basic" label="Повторите пароль" variant="outlined" name='confirmPassword' value={confirmPassword} type={testType} className={classes.inputs_modal} sx={{
                                    '& .MuiInputBase-root':{
                                        borderRadius:"10px",
                                        width: '402px'
                                    }
                                }} onChange={handleConfirmPasswordChange}
                                />
                                 <img src={testEye} alt="openEye" className={classes.eyes_test} onClick={handleTestPassword}/>
                                <p className={classes.password_text}>Пароль должен содержать не менее 8 букв или цифр.</p>
                            </div> 
                        </div>
                        <div className={classes.checkbox_class}>
                            <input type='checkbox' className={classes.inp_checkBox}/>
                            <p className={classes.checkbox_text}>Создание учетной записи означает, что вы согласны c нашими Условиями обслуживания, Политикой конфиденциальности и настройками уведомлений по умолчанию.</p>
                        </div>
                        <div className={classes.buttons_or}>
                            <button className={classes.sign_btn} type="submit" disabled={!formValid}>Создать аккаунт</button>
                            <span className={classes.text_or}>или</span>
                            <button className={classes.google_btn}>
                                <span className={classes.account_google_icon}><AccountCircleOutlinedIcon/></span>
                                <div className={classes.user_account}>
                                    <p className={classes.sign_google_text}>Зарегистрироваться через Google</p>
                                    <p className={classes.exemple_user}>example@gmail.com</p>
                                </div>
                                <img src={googleSvg} alt="google" className={classes.google_icon}/>
                            </button>
                        </div>
                       
                    </div>
                </form>
            </Box>
        </Modal>
    </div>
  )
}

export default SignUpModal