import React from 'react';
import classes from './CardSearchPage.module.css'
import SmallTravelCard from '../smallTravelCard/SmallTravelCard';
import { useSelector } from 'react-redux';


function CardSearchPage() {
  const {filtered} = useSelector(state => state.filtered)
  console.log(filtered)
  const arrayTour = filtered?.results
  return (
    <div className={classes.card}>
        <div className={classes.container}>
            <div className={classes.card_inner}>
                <div className={classes.tour_card}>
                {filtered && filtered.results && filtered.results.length === 0 
                ? 
                (
                  <h2>Такого тура не существует</h2>
                ) : 
                (
                  arrayTour?.map(item => <SmallTravelCard item={item} />)
                )}
                      {/* <SmallTravelCard/>
                      <SmallTravelCard/>
                      <SmallTravelCard/>
                      <SmallTravelCard/>
                      <SmallTravelCard/>
                      <SmallTravelCard/>
                      <SmallTravelCard/>
                      <SmallTravelCard/> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardSearchPage