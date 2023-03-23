import React, { memo } from 'react'
import FirstBlockHome from '../../components/firstBlockHome/FirstBlockHome'
import CheckDigits from '../../components/header/signUpHeader/comeInModal/requestResetComponent/CheckDigits'
import PasswordReset from '../../components/header/signUpHeader/comeInModal/requestResetComponent/PasswordReset'
import SecondCards from '../../components/homePageComponents/allCards/secondCards/SecondCards'
import IncreaseCards from '../../components/homePageComponents/allCards/threeCards/increaseCards/IncreaseCards'
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
                    <PeshijTur/>
                    <IncreaseCards/>
                    <OneTour />
                    <SecondCards />
                    <SliderTours />
                    <Velotur/>
                    {/* <IncreaseCards/>
                    <SecondCards />
                    <PeshijTur/>
                    <Velotur/> */}
                    <CardModalPage />
                    <CheckDigits/>
                    <PasswordReset/>
                </div>
            </div>
            <LastBlock />
        </div>
    )
}

export default memo(HomePage)
