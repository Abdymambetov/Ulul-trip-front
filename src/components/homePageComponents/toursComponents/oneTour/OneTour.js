import React from 'react'
import SmallTravelCard from '../../../smallTravelCard/SmallTravelCard'
import classes from './OneTour.module.css'

function OneTour() {
  return (
    <div className={classes.tour}>
      <div className={classes.container}>
        <div className={classes.tour_inner}>
                  <h1 className={classes.tour_text}>Пешие туры</h1>
                  <div className={classes.all_tours}>
                    <SmallTravelCard/>
                    <SmallTravelCard/>
                    <SmallTravelCard/>
                    <SmallTravelCard/>
                    <SmallTravelCard/>
                    <SmallTravelCard/>
                    <SmallTravelCard/>
                    <SmallTravelCard/>
                  </div>
                  <button className={classes.btn_tour}>Показать все места</button>
        </div>
    </div>
    </div>
  )
}

export default OneTour