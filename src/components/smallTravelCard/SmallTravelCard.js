import React, { useState } from 'react';
import classes from './SmallTravelCard.module.css';
import carPng from '../../images/smallCardImg/Rectangle 276.png';
import Heart from 'react-heart';
import point from '../../images/smallCardImg/Vector (3).svg'
import star from '../../images/smallCardImg/star.svg'

function SmallTravelCard() {
  const [active ,setActive] = useState(false);
  const [notActive , setNotActive] =useState('heard');


  const heandleClick = () => {
    if(active === false){
      setActive(true)
      setNotActive('heard_focus')
    } else{
      setActive(false)
      setNotActive('heard')
    }
  }
  return (
    <div className={classes.small_card}>
       <div className={classes.parent_card}>
        <div className={classes.photo_block}>
          <div className='photo'>
            <img src={carPng} alt="car" className={classes.card_img} />
            <div className={notActive} style={{width: "32px", height: "32px", }}>
                      <Heart  className='heard-back' 
                      isActive={active} 
                      onClick={heandleClick}
                      animationTrigger = "both" 
                      inactiveColor='red'
                      activeColor = "red"
                      animationDuration={0.1} style={{width: '20px', height: '18px'}}/>
            </div>
          </div>
        </div>
        <div className={classes.locatiion_tour}>
          <p className={classes.location_tour_text}>Местоположение тура</p>
        </div>
        <div className={classes.location_info}>
          <div className={classes.location_region}>
            <div className={classes.region_tour}>
              <p className={classes.region_text}>Чуй</p>
              <img src={point} alt="point" className={classes.region_img}/>
            </div>
            <div className={classes.tour_price}>
                <p className={classes.price_number}>500 <span className={classes.price_text}>сом</span></p>
                
            </div>
            <div className={classes.tour_day}>
                <p className={classes.day_number}>1  <span className={classes.day_text}>день</span></p>
            </div>
          </div>
          <div className={classes.star_parent}>
            <div className={classes.card_star}>
              <img src={star} alt="star" />
              <p className={classes.rating_text}>4.5</p>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default SmallTravelCard