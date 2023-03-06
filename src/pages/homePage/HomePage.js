import React from 'react'
import FirstBlockHome from '../../components/firstBlockHome/FirstBlockHome';
import SecondCards from '../../components/homePageComponents/allCards/secondCards/SecondCards';
import LastBlock from '../../components/homePageComponents/lastBlock/LastBlock';
import OneTour from '../../components/homePageComponents/toursComponents/oneTour/OneTour';
import SliderTours from '../../components/homePageComponents/toursComponents/sliderTours/SliderTours';
import CardModalPage from '../cardModalPage/CardModalPage';
import classes from './HomePage.module.css'
function HomePage() {
  return (
    <div>
      <FirstBlockHome/>
      <div className={classes.home}>
        <div className={classes.container}>
          <OneTour/>
          <SliderTours/>
          <SecondCards/>
          <OneTour/>
          <SliderTours/>
          <SecondCards/>
          <SliderTours/>
          <CardModalPage/>
        </div>
      </div>
      <LastBlock/>
    </div>
  )
}

export default HomePage