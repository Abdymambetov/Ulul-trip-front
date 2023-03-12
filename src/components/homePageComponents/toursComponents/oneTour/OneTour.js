import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { horseTourAction } from '../../../../store/slices/TourSlice'
import SmallTravelCard from '../../../smallTravelCard/SmallTravelCard'
import classes from './OneTour.module.css'

function OneTour() {
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(horseTourAction())
  }, [])
  const {horseArr} = useSelector(state => state.tours)
  return (
    <div className={classes.tour}>
      <div className={classes.container}>
        <div className={classes.tour_inner}>
                  <h1 className={classes.tour_text}>Пешие туры</h1>
                  <div className={classes.all_tours}>
                    {horseArr.map((item) => (
                          <SmallTravelCard item={item}/>
                    ))}
                    {/* <SmallTravelCard/>
                    <SmallTravelCard/>
                    <SmallTravelCard/>
                    <SmallTravelCard/>
                    <SmallTravelCard/>
                    <SmallTravelCard/>
                    <SmallTravelCard/>
                    <SmallTravelCard/> */}
                  </div>
                  <button className={classes.btn_tour}>Показать все места</button>
        </div>
    </div>
    </div>
  )
}

export default OneTour