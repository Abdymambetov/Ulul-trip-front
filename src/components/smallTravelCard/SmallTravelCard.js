import React, { useState } from 'react';
import classes from './SmallTravelCard.module.css';
import carPng from '../../images/smallCardImg/Rectangle 276.png'
import Heart from 'react-heart'
import point from '../../images/smallCardImg/Vector (3).svg'
import star from '../../images/smallCardImg/star.svg'
import { useDispatch } from 'react-redux';
import { openCardModal } from '../../store/slices/authSlice';

function SmallTravelCard({item}) {
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
  const dispatch = useDispatch()
    const openModal = () => {
        dispatch(openCardModal())
    }
     
  return (
    <div className={classes.small_card} onClick={openModal}>
       <div className={classes.parent_card}>
        <div className={classes.photo_block}>
          <div className='photo'>
            <img src={item?.tour_images[0]?.images.replace(
                                    /(\d{1,3}\.\d{1,3}\.\d{1,3}\.)\d{1,3}/,
                                    '$1' + '147:8880'
                                ) } alt="car" className={classes.card_img} />
            <div className={notActive} style={{width: "32px", height: "32px", }}>
                <Heart  className='heard-back' 
                  isActive={active} 
                  onClick={heandleClick}
                  animationTrigger = "both" 
                  inactiveColor='#FF6F32'
                  activeColor = "#FF6F32"
                  animationDuration={0.1} style={{width: '20px', height: '18px'}}/>
            </div>
          </div>
        </div>
        <div className={classes.locatiion_tour}>
          <p className={classes.location_tour_text}>{item?.title}</p>
        </div>
        <div className={classes.location_info}>
          <div className={classes.location_region}>
            <div className={classes.region_tour}>
              <p className={classes.region_text}>{item?.region[0]?.name}</p>
              <img src={point} alt="point" className={classes.region_img}/>
            </div>
            <div className={classes.tour_price}>
                <p className={classes.price_number}>{item?.price} <span className={classes.price_text}>сом</span></p>
                
            </div>
            <div className={classes.tour_day}>
                <p className={classes.day_number}>{item?.duration}  <span className={classes.day_text}>день</span></p>
            </div>
          </div>
          <div className={classes.star_parent}>
            <div className={classes.card_star}>
              <img src={star} alt="star" />
              <p className={classes.rating_text}>{item?.average_rating}</p>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default SmallTravelCard