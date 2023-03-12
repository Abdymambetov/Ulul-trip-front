import React from 'react'
import classes from './CardModalPage.module.css'
import starsImg from '../../images/cardModalImg/Stars.svg'
function Reviews() {
  return (
    <div className={classes.people_reviwes}>
    <div className={classes.unwanted_line}></div>
    <div className={classes.header_review}>
        <div className={classes.info}>
        <h5 className={classes.name}>
            Имя Фамилия
        </h5>
        <h6 className={classes.date}>
            ДД/ММ/ГГГГ
        </h6>
        </div>
        <img src={starsImg} alt ='stars' className={classes.stars}/>
    </div>
        <hr className={classes.line}/>
    <div className={classes.review_text}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ea commodo consequat. t in culpa qui officia deserunt mollit anim id est laborum...
    </div>
    </div> 
  )
}

export default Reviews