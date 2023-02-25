import React from 'react';
import classes from './ComeInModal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {closeComeInModal} from '../../../../store/slices/authSlice';
import { Box, Modal,  TextField } from '@mui/material';
import ulul from '../../../../images/modalImg/Ulul.svg';
import croosImg from '../../../../images/modalImg/Cross2.svg';
import { useState } from 'react';
import openEyes from '../../../../images/modalImg/Property 1=Default.svg'
import closeEyes from '../../../../images/modalImg/Property 1=Variant2.svg'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import googleSvg from '../../../../images/modalImg/Google.svg'

const style = {
    width: '600px',
    height: '602px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(0.9)',
    bgcolor: '#FFFFFF',
    borderRadius: '24px',
    boxShadow: 24,
  };
function ComeInModal() {
    const [eyesPassword, setEyesPassword] = useState(closeEyes)
    const [passwordType, setPasswordType] = useState('password')
    const dispatch = useDispatch()
    const {comeInModal} = useSelector(state => state.auth)
    const handleCloseModal = () => {
        dispatch( closeComeInModal())
    }
    const handleTypePassword = () => {
        if(passwordType === 'password') {
            setPasswordType('text')
            setEyesPassword(openEyes)
        } else{
            setPasswordType('password')
            setEyesPassword(closeEyes)
        }
    }
  return (
    <div>
        <Modal
         open={comeInModal}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
         sx={{backdropFilter: 'blur(5px)'}}
         >
            <Box sx={style}>
                <div className={classes.parent_modal}>
                    <div>
                        <div className={classes.ulul_block}>
                            <img src={ulul} alt="ulul_comIn" className={classes.ulul_img}/>
                            <h1 className={classes.text_come_in}>ВХОД</h1> 
                        </div>
                        <div className={classes.cross_parent}>
                            <img src={croosImg} alt="cross" onClick={handleCloseModal} className={classes.croos_ulul}/>
                        </div>
                    </div>
                   
                    <form>
                        <div className={classes.all_inputs}>
                            <div className={classes.inputs_ordinary}>
                                <TextField id="outlined-basic" label="Эл.почта" variant="outlined" name='email'  className={classes.inputs_modal}  sx={{
                                    '& .MuiInputBase-root':{
                                        borderRadius:"10px" 
                                    }
                                }} />
                            </div>
                            <div className={classes.inputs_ordinary_password}>
                                <TextField id="outlined-basic" label="Пароль" variant="outlined" name='password' type={passwordType} className={classes.inputs_modal}  sx={{
                                    '& .MuiInputBase-root':{
                                        borderRadius:"10px"
                                    }
                                }}/>
                                <img src={eyesPassword} alt="password_eyes" onClick={handleTypePassword} className={classes.password_eyes}/>
                            </div>
                        </div>
                        <div className={classes.all_btns}>
                            <button className={classes.come_btn}>Войти</button>
                            <span className={classes.or_text}>ИЛИ</span>
                            <button className={classes.google_btn}>
                                <span className={classes.account_google_icon}><AccountCircleOutlinedIcon/></span>
                                <div className={classes.user_account}>
                                    <p className={classes.sign_google_text}>Войти как example</p>
                                    <p className={classes.exemple_user}>example@gmail.com</p>
                                </div>
                                <img src={googleSvg} alt="google" className={classes.google_icon}/>
                            </button>
                        </div>
                    </form>
                </div>
            </Box>
        </Modal>
    </div>
  )
}

export default ComeInModal