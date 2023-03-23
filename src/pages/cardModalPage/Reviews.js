import React from 'react'
import classes from './CardModalPage.module.css'
import starsImg from '../../images/cardModalImg/Stars.svg'
function Reviews({info}) {
  console.log(info);
  return (
    <div className={classes.people_reviwes}>
    <div className={classes.unwanted_line}></div>
    <div className={classes.header_review}>
        <div className={classes.info}>
        <h5 className={classes.name}>
            {info?.author}
        </h5>
        <h6 className={classes.date}>
          {info?.date_published} 
        </h6>
        </div>
        <img src={starsImg} alt ='stars' className={classes.stars}/>
    </div>
        <hr className={classes.line}/>
    <div className={classes.review_text}>
      {info?.text}
    </div>
    </div> 
  )
}

export default Reviews