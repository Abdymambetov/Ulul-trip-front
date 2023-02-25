import React, { useState } from 'react'
import classes from './Footer.module.css'
import ululImage from '../../images/modalImg/Ulul.svg';

import gitHubImage from '../../images/footerImg/gitHub.svg'
function Footer() {
  const [pasClass, setPasClass] = useState('git_img')

 const handleOpcaity = () => {
  if(pasClass === 'git_img'){
   
    setPasClass('git_img_opacity')
  } else{
   
    setPasClass('git_img')
  }
 }
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
              <div className={classes.support_code}>
                <div className={classes.suport_footer}>
                  <span className={classes.support_img}></span>
                  <li className={classes.suport_text}>Поддержать</li>
                </div>
                <div  className={classes.suport_footer}>
                  <span  className={classes.suport_code_img}></span>
                  <li className={classes.suport_text} onClick={handleOpcaity}>Код</li>
                  <a href="https://github.com/Abdymambetov/Ulul-trip-front" target='__blank' className={pasClass}>
                  </a>
                </div>
              </div>
            
          </footer>
        </div>
    </div>
  )
}

export default Footer