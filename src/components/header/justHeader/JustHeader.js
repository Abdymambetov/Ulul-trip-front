import React from 'react'
import classes from './JustHeader.module.css'
import Vector from '../../../images/headerImg/Vector.svg'
import HeartIcon from '../../../images/headerImg/heart.svg'
import ProfileIcon from '../../../images/headerImg/Profile.svg'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { openLikesModal } from '../../../store/slices/authSlice'
import LikesModal from '../../likesModal/LikesModal'

function JustHeader() {
  
const dispatch = useDispatch()
  const openLikes = () => { 
    dispatch(openLikesModal())
  }
  return (
    <div>
         <div className={classes.header}>
            <div className={classes.container}>
                <header className={classes.header_inner}>
                  <div className={classes.header_antools}>
                    <a href='/'>
                      <img src={Vector} alt="vector" className={classes.vector_img}/>
                    </a>
                      <h3 className={classes.ulul}>Ulul Trip</h3>
                  </div>
                  <div className={classes.profile_header}>
                    <img src={HeartIcon} alt="Heart" className={classes.heart_icon} onClick={openLikes}/>
                    <Link to='profile'>
                      <img src={ProfileIcon} alt="profile" className={classes.header_user}/>
                    </Link>
                  </div>
                </header>
            </div>
        </div>
        <LikesModal/>
    </div>
  )
}

export default JustHeader