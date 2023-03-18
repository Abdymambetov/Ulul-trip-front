import React from 'react'
import classes from './SignUpHeader.module.css'
import Vector from '../../../images/headerImg/Vector.svg'
import { useDispatch } from 'react-redux'
import { openComeInModal, openModal } from '../../../store/slices/authSlice'
import SignUpModal from './signUpModal/SignUpModal'
import ComeInModal from './comeInModal/ComeInModal'
import { Link } from 'react-router-dom'
function SignUpHeader() {
  const dispatch = useDispatch()
  const openAuth = () => {
    dispatch(openModal())
  }
  const openComeModal = () => {
    dispatch(openComeInModal())
  }
  const onClick = () => {
    window.location.reload() 
}
  return (
    <div>
      <div className={classes.header}>
            <div className={classes.container}>
                <header className={classes.header_inner}>
                  <div className={classes.header_antools}>
                    <Link to='/' onClick={onClick}>
                      <img src={Vector} alt="vector" className={classes.ulul_image}/>
                    </Link>
                      <h3 className={classes.ulul}>Ulul Trip</h3>
                  </div>
                  <div className={classes.two_btns}>
                    <button className={classes.sign_in_btn} onClick={openComeModal}>Войти</button>
                    <button className={classes.sign_up_btn} onClick={openAuth}>Зарегистрироваться</button>
                  </div>
                </header>
            </div>
        </div>
        <SignUpModal/>
      <ComeInModal/>
    </div>
    
  )
}

export default SignUpHeader