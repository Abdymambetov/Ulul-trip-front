import React from 'react'
import classes from './JustHeader.module.css'
import Vector from '../../../images/headerImg/Vector.svg'
import HeartIcon from '../../../images/headerImg/heart.svg'
import ProfileIcon from '../../../images/headerImg/Profile.svg'

function JustHeader() {
  return (
    <div>
         <div className={classes.header}>
            <div className={classes.container}>
                <header className={classes.header_inner}>
                  <div className={classes.header_antools}>
                      <img src={Vector} alt="vector" className={classes.vector_img}/>
                      <h3 className={classes.ulul}>Ulul Trip</h3>
                  </div>
                  <div className={classes.profile_header}>
                    <img src={HeartIcon} alt="Heart" />
                    <img src={ProfileIcon} alt="heart" className={classes.header_user}/>
                  </div>
                </header>
            </div>
        </div>
    </div>
  )
}

export default JustHeader