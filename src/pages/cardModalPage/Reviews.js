import React from 'react'
import classes from './CardModalPage.module.css'
import starsImg from '../../images/cardModalImg/Stars.svg'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
function Reviews({info}) {
  const str = info?.date_published
  const regex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).(\d{6})([\+\-]\d{2}):(\d{2})$/;
  const [, year, month, day, hour, minute, second, millisecond, offsetHour, offsetMinute] = str.match(regex);
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
          {year + '-' + month + '-' + day}
        </h6> 
        </div>
        <Stack spacing={1}>
          <Rating name="size-medium"  value={info?.rating} size="medium" readOnly className={classes.stars}/>
      </Stack>
        {/* <img src={starsImg} alt ='stars' className={classes.stars}/> */}
    </div>
        <hr className={classes.line}/>
    <div className={classes.review_text}>
      {info?.text}
    </div>
    </div> 
  )
}

export default Reviews