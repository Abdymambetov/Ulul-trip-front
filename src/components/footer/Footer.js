import React, { useState } from 'react'
import classes from './Footer.module.css'
<<<<<<< HEAD
import ululImage from '../../images/modalImg/Ulul.svg'
import { useDispatch } from 'react-redux'
import { getBigerCursor } from '../../store/slices/preloaderSlice'
import WithHoverStyles from '../hocHover/HOCHover'
const HoverRedLi = WithHoverStyles(Li)

function Li({ children }) {
    return (
        <div className={classes.about_point}>
            <li className={`${classes.about_us_text} touch__me`}>{children}</li>
=======
import ululImage from '../../images/modalImg/Ulul.svg';
import { Link } from 'react-router-dom';


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
                  <Link to='faq'>
                    <li className={`${classes.about_us_text} touch__me`}>Помощь</li>
                  </Link>
                </div>
              </ul>
            
          </footer>
>>>>>>> 3618e2e8732413e750725a368841b23544bf7fc9
        </div>
    )
}
const snList = [
    <div className={classes.svgs_media_facebook}></div>,
    <div className={classes.svgs_media_inst}></div>,
    <div className={classes.svgs_media_telega}></div>,
    <div className={classes.svgs_media_twiter}></div>
]

function Icon({ children }) {
    return children
}

const HoverIcon = WithHoverStyles(Icon)

function Footer() {
    const listSecond = [' О нас', ' Вакансии', 'Реклама', 'Помощь']

    return (
        <div className={classes.footer}>
            <div className={classes.container}>
                <footer className={classes.footer_inner}>
                    <div className={classes.ulul_img}>
                        <HoverIcon>
                            <img
                                src={ululImage}
                                alt="ululImage"
                                className={classes.ulul_svg}
                            />
                        </HoverIcon>
                    </div>
                    <div className={classes.social_media}>
                        {snList.map((item, i) => (
                            <HoverIcon>{item}</HoverIcon>
                        ))}
                    </div>
                    <ul className={classes.about_us}>
                        {listSecond.map(item => (
                            <HoverRedLi key={item}>{item}</HoverRedLi>
                        ))}
                    </ul>
                </footer>
            </div>
        </div>
    )
}

export default Footer
