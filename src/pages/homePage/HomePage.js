import React, { memo } from 'react'
import FirstBlockHome from '../../components/firstBlockHome/FirstBlockHome'
import SecondCards from '../../components/homePageComponents/allCards/secondCards/SecondCards'
import LastBlock from '../../components/homePageComponents/lastBlock/LastBlock'
import OneTour from '../../components/homePageComponents/toursComponents/oneTour/OneTour'
import PeshijTur from '../../components/homePageComponents/toursComponents/oneTour/peshijTur/PeshijTur'
import SliderTours from '../../components/homePageComponents/toursComponents/sliderTours/SliderTours'
import Velotur from '../../components/homePageComponents/toursComponents/sliderTours/velotur/Velotur'
import CardModalPage from '../cardModalPage/CardModalPage'
import classes from './HomePage.module.css'
function HomePage() {
    return (
        <div>
            <FirstBlockHome />
            <div className={classes.home}>
                <div className={classes.container}>
                    <OneTour />
                    <SliderTours />
                    <SecondCards />
                    <PeshijTur/>
                    <Velotur/>
                    <SecondCards />
                    <SliderTours />
                    <CardModalPage />
                </div>
            </div>
            <LastBlock />
        </div>
    )
}

export default memo(HomePage)
