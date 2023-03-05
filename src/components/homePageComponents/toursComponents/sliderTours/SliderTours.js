import React from 'react'
import classes from './SliderTours.module.css'
import leftArrow from '../../../../images/sliderImg/leftArrow.svg';
import rightArrow from '../../../../images/sliderImg/rightArrow.svg'
import SmallTravelCard from '../../../smallTravelCard/SmallTravelCard';

function SliderTours() {
  return (
    <div className={classes.slider}>
        <div className={classes.container}>
            <div className={classes.slider_inner}>
                <h1 className={classes.tours_text}>Джип туры</h1>
                <div className={classes.buttons_arrow}>
                    <button className={classes.left_btn}>
                        <img src={leftArrow} alt="" />
                    </button>
                    <button className={classes.right_btn}>
                        <img src={rightArrow} alt="" />
                    </button>
                </div>
                <div className={classes.cards_slider}>
                    <SmallTravelCard/>
                    <SmallTravelCard/>
                    <SmallTravelCard/>
                    <SmallTravelCard/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SliderTours