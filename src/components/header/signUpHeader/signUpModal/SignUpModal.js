import React from 'react'
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
    const {modal} = useSelector(state => state.auth)
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
  return (
    <div>
         <Modal
            open={modal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{backdropFilter: 'blur(5px)'}}
        >
            <Box sx={style} >
                <form>
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
                            {/* <div className={classes.one_inputs} >
                                <TextField id="outlined-basic" label="Имя" variant="outlined" name='name'  className={classes.inputs_modal} 
                                sx={{
                                    '& .MuiInputBase-root':{
                                        borderRadius:"10px"
                                    }
                                }}/>
                            </div>
                            <div className={classes.one_inputs}>
                                <TextField id="outlined-basic" label="Фамилия" variant="outlined" name='name' sx={{
                                    '& .MuiInputBase-root':{
                                        borderRadius:"10px"
                                    }
                                }}  className={classes.inputs_modal} />
                            </div>
                            <div className={classes.one_inputs}>
                                <TextField id="outlined-basic" label="Эл.почта" placeholder='@' variant="outlined" name='name'  className={classes.inputs_modal_email} sx={{
                                    '& .MuiInputBase-root':{
                                        borderRadius:"10px"
                                    }
                                }} />
                            </div>
                            <div className={classes.one_inputs}>
                                <TextField id="outlined-basic" label="Пароль" variant="outlined" name='name'  className={classes.inputs_modal} sx={{
                                    '& .MuiInputBase-root':{
                                        borderRadius:"10px"
                                    }
                                }} />
                            </div>
                            <div className={classes.one_inputs}>
                                <TextField id="outlined-basic" label="Повторите пароль" variant="outlined" name='name'  className={classes.inputs_modal} sx={{
                                    '& .MuiInputBase-root':{
                                        borderRadius:"10px"
                                    }
                                }} />
                                <p className={classes.password_text}>Пароль должен содержать не менее 8 букв или цифр.</p>
                            </div> */}
                            {inputInner.map(item=><SignUp  name={item.name} label={item.label}/>)}
                            <div className={classes.inputs_modal_password}>
                                <TextField id="outlined-basic" label="Пароль" variant="outlined" name='name' type={type} className={classes.inputs_modal} sx={{
                                    '& .MuiInputBase-root':{
                                        borderRadius:"10px"
                                        
                                    }
                                    
                                }} />
                                <img src={eye} alt="openEye" className={classes.eyes_modal} onClick={handlePassword}/>
                            </div>
                            <div className={classes.inputs_pas_test}>
                                <TextField id="outlined-basic" label="Повторите пароль" variant="outlined" name='name' type={testType} className={classes.inputs_modal} sx={{
                                    '& .MuiInputBase-root':{
                                        borderRadius:"10px"
                                    }
                                }} />
                                 <img src={testEye} alt="openEye" className={classes.eyes_test} onClick={handleTestPassword}/>
                                <p className={classes.password_text}>Пароль должен содержать не менее 8 букв или цифр.</p>
                            </div> 
                        </div>
                        <div className={classes.checkbox_class}>
                            <input type='checkbox' className={classes.inp_checkBox}/>
                            <p className={classes.checkbox_text}>Создание учетной записи означает, что вы согласны c нашими Условиями обслуживания, Политикой конфиденциальности и настройками уведомлений по умолчанию.</p>
                        </div>
                        <div className={classes.buttons_or}>
                            <button className={classes.sign_btn}>Создать аккаунт</button>
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