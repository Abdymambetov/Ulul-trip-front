import React from 'react'
import classes from './SliderTours.module.css'
import leftArrow from '../../../../images/sliderImg/leftArrow.svg';
import rightArrow from '../../../../images/sliderImg/rightArrow.svg'
import SmallTravelCard from '../../../smallTravelCard/SmallTravelCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { jeepsToursAction} from '../../../../store/slices/TourSlice';

function SliderTours() {
    const dispatch = useDispatch()
    const {jeepTourArr} = useSelector(state => state.tours)
    useEffect(() => {
        dispatch(jeepsToursAction())
    }, [])
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
                    {
                        jeepTourArr.map((item) => (
                            <SmallTravelCard item={item}/>
                        ))
                    }
                    {/* <SmallTravelCard/>
                    <SmallTravelCard/>
                    <SmallTravelCard/>
                    <SmallTravelCard/> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default SliderTours