import React from 'react';
import classes from './CardSearchPage.module.css'
import SmallTravelCard from '../smallTravelCard/SmallTravelCard';


function CardSearchPage() {
  return (
    <div className={classes.card}>
        <div className={classes.container}>
            <div className={classes.card_inner}>
                <div className={classes.tour_card}>
                      <SmallTravelCard/>
                      <SmallTravelCard/>
                      <SmallTravelCard/>
                      <SmallTravelCard/>
                      <SmallTravelCard/>
                      <SmallTravelCard/>
                      <SmallTravelCard/>
                      <SmallTravelCard/>
                </div>
                <button className={classes.btn_load}>Загрузить еще</button>
            </div>
        </div>
    </div>
  )
}

export default CardSearchPage