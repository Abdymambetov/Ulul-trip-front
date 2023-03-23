import React from 'react'
import classes from './ComeInModal.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { closeComeInModal, openRequestResetEmailModal } from '../../../../store/slices/authSlice'
import { Box, Modal, TextField } from '@mui/material'
import ulul from '../../../../images/modalImg/Ulul.svg'
import croosImg from '../../../../images/modalImg/Cross2.svg'
import { useState } from 'react'
import openEyes from '../../../../images/modalImg/Property 1=Default.svg'
import closeEyes from '../../../../images/modalImg/Property 1=Variant2.svg'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import googleSvg from '../../../../images/modalImg/Google.svg'
import { logAction } from '../../../../store/slices/registerSlice'
import { useEffect } from 'react'
import RequestResetEmail from './requestResetComponent/RequestResetEmail'

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
function ComeInModal() {
    const [eyesPassword, setEyesPassword] = useState(closeEyes)
    const [passwordType, setPasswordType] = useState('password')
    const dispatch = useDispatch()
    const { comeInModal } = useSelector(state => state.modalTour)
    const handleCloseModal = () => {
        dispatch(closeComeInModal())
    }
    const openRequestEmail = () => {
        dispatch(openRequestResetEmailModal())
    }
    const handleTypePassword = () => {
        if (passwordType === 'password') {
            setPasswordType('text')
            setEyesPassword(openEyes)
        } else {
            setPasswordType('password')
            setEyesPassword(closeEyes)
        }
    }
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [formValid, setFormValid] = useState(false)
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)

    function handleEmailChange(event) {
        setUsername(event.target.value)
        // const emailValue = event.target.value.trim()
        // setUsername(emailValue)
        // const re =
        //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        // if (!re.test(String(emailValue).toLowerCase())) {
        //     setEmailError('Некоректный емейл')
        // } else {
        //     setEmailError('')
        // }
    }

    function handlePasswordChange(event) {
        const passwordValue = event.target.value.trim()
        setPassword(passwordValue)

        if (
            passwordValue.trim().length < 8 ||
            passwordValue.trim().length > 16
        ) {
            setPasswordError('Пароль должен быть не меньше 8 и не больше 16')
        } else if (!/^[a-zA-Z0-9]*$/.test(passwordValue)) {
            setPasswordError('Пароль должен содержать только буквы и цифры')
        } else {
            setPasswordError('')
        }
    }

    function handleSubmit(event) {
        event.preventDefault()

        // Выполнение проверки формы перед отправкой.

        if (emailError || passwordError) {
            return
        }
        setIsFormSubmitted(true)
        const user = { username, password }
        dispatch(logAction(user))
    }
    useEffect(() => {
        if (isFormSubmitted) {
            setFormValid(
                username.trim().length > 0 &&
                    password.trim().length > 0 &&
                    emailError === '' &&
                    passwordError === ''
            )
        } else {
            setFormValid(username.trim().length > 3 && password.trim().length > 7)
        }
    }, [username, password, emailError, passwordError, isFormSubmitted])
    return (
        <div>
            <Modal
                open={comeInModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ backdropFilter: 'blur(5px)' }}
            >
                <Box sx={style}>
                    <div className={classes.parent_modal}>
                        <div>
                            <div className={classes.ulul_block}>
                                <img
                                    src={ulul}
                                    alt="ulul_comIn"
                                    className={classes.ulul_img}
                                />
                                <h1 className={classes.text_come_in}>ВХОД</h1>
                            </div>
                            <div className={classes.cross_parent}>
                                <img
                                    src={croosImg}
                                    alt="cross"
                                    onClick={handleCloseModal}
                                    className={classes.croos_ulul}
                                />
                            </div>
                        </div>
                                    {emailError && (
                                        <span className={classes.span_email}>
                                            {emailError}
                                        </span>
                                    )}

                        <form>
                            <div className={classes.all_inputs}>
                                <div className={classes.inputs_ordinary}>
                                    <TextField
                                        id="outlined-basic"
                                        label="username"
                                        variant="outlined"
                                        name="username"
                                        className={classes.inputs_modal}
                                        value={username}
                                        onChange={handleEmailChange}
                                        sx={{
                                            '& .MuiInputBase-root': {
                                                borderRadius: '10px'
                                            }
                                        }}
                                    />
                                </div>
                                {passwordError && (
                                    <span className={classes.password_error}>{passwordError}</span>
                                )}
                                <div
                                    className={classes.inputs_ordinary_password}
                                >
                                    <TextField
                                        id="outlined-basic"
                                        label="Пароль"
                                        variant="outlined"
                                        name="password"
                                        type={passwordType}
                                        className={classes.inputs_modal}
                                        value={password}
                                        onChange={handlePasswordChange}
                                        sx={{
                                            '& .MuiInputBase-root': {
                                                borderRadius: '10px'
                                            }
                                        }}
                                    />
                                    <img
                                        src={eyesPassword}
                                        alt="password_eyes"
                                        onClick={handleTypePassword}
                                        className={classes.password_eyes}
                                    />
                                </div>
                            </div>
                            <div className={classes.all_btns}>
                                <button
                                    className={classes.come_btn}
                                    onClick={handleSubmit}
                                    disabled={!formValid}
                                    style={{
                                        backgroundColor:
                                            formValid === true
                                                ? '#ff6f32'
                                                : '#c3c3c3'
                                    }}
                                >
                                    Войти
                                </button>
                                <p onClick={openRequestEmail}>Забыли пароль?</p>
                                <RequestResetEmail/>
                                <span className={classes.or_text}>ИЛИ</span>
                                <button className={classes.google_btn}>
                                    <span
                                        className={classes.account_google_icon}
                                    >
                                        <AccountCircleOutlinedIcon />
                                    </span>
                                    <div className={classes.user_account}>
                                        <p className={classes.sign_google_text}>
                                            Войти как example
                                        </p>
                                        <p className={classes.exemple_user}>
                                            example@gmail.com
                                        </p>
                                    </div>
                                    <img
                                        src={googleSvg}
                                        alt="google"
                                        className={classes.google_icon}
                                    />
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
