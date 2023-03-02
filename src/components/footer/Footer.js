import React, { useState } from 'react'
import classes from './Footer.module.css'
import ululImage from '../../images/modalImg/Ulul.svg';
import { useDispatch } from 'react-redux';
import { getBigerCursor } from '../../store/slices/preloaderSlice';


function Footer() {
 
  return (
    <div className={classes.footer}>
        <div className={classes.container}>
          <footer className={classes.footer_inner}>
              <div className={classes.ulul_img}>
                <img src={ululImage} alt="ululImage" className={classes.ulul_svg}/>
              </div>
              <div className={classes.social_media}>
                <span  className={classes.svgs_media_facebook}></span>
                <span className={classes.svgs_media_inst}></span>
                <span className={classes.svgs_media_telega}></span>
                <span  className={classes.svgs_media_twiter}></span>
              </div>
              <ul className={classes.about_us}>
                <div className={classes.about_point}>
                  <li className={`${classes.about_us_text} touch__me`}>О нас</li>
                </div> 
                <div className={classes.about_point}>
                  <li className={`${classes.about_us_text} touch__me`}>Вакансии</li>
                </div>
                 <div className={classes.about_point}>
                  <li className={`${classes.about_us_text} touch__me`}>Реклама</li>
                </div>
                 <div className={classes.about_point}>
                  <li className={`${classes.about_us_text} touch__me`}>Помощь</li>
                </div>
              </ul>
            
          </footer>
        </div>
    </div>
  )
}

export default Footer