import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SmallTravelCard from '../../../smallTravelCard/SmallTravelCard'
import classes from './OneTour.module.css'
import {getHorseArr, oneTour} from "../../../../store/slices/TourSlice";

function OneTour() {
    const {items, visibleCard, } = useSelector(state => state.tours)
    const showMoreItems = () =>{
        dispatch(getHorseArr(visibleCard + visibleCard))

    }
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(oneTour())
  }, [])
  return (
    <div className={classes.tour}>
      <div className={classes.container}>
        <div className={classes.tour_inner}>
                  <h1 className={classes.tour_text}>Конные туры</h1>
                  <div className={classes.all_tours}>
                    {items.slice(0, visibleCard).map((item) => (
                          <SmallTravelCard item={item}/>
                    ))}
                  </div>
            {
                visibleCard < items.length && (
                    <button className={classes.btn_tour} onClick={showMoreItems}>Показать все места</button>
                )
            }

        </div>
    </div>
    </div>
  )
}

export default OneTour