import React, { useEffect } from 'react'
import classes from '../SliderTours.module.css'
import leftArrow from '../../../../../images/sliderImg/leftArrow.svg';
import rightArrow from '../../../../../images/sliderImg/rightArrow.svg'
import { useDispatch, useSelector } from 'react-redux';
import { veloTutAction } from '../../../../../store/slices/TourSlice';
import SmallTravelCard from '../../../../smallTravelCard/SmallTravelCard';
function Velotur() {
    const dispatch = useDispatch()
    const {veloTurArr} = useSelector(state => state.tours)
    useEffect(() => {
        dispatch(veloTutAction())
    }, [])
  return (
    <div className={classes.slider}>
    <div className={classes.container}>
        <div className={classes.slider_inner}>
            <h1 className={classes.tours_text}>Велотур</h1>
            <div className={classes.buttons_arrow}>
                <button className={classes.left_btn}>
                    <img src={leftArrow} alt="" />
                </button>
                <button className={classes.right_btn}>
                    <img src={rightArrow} alt="" />
                </button>
            </div>
            <div className={classes.cards_slider}>
               {veloTurArr.map((item) => (
                    <SmallTravelCard item={item}/>
               ))}
            </div>
        </div>
    </div>
</div>
  )
}

export default Velotur