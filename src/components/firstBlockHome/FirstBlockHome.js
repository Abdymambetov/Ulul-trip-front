import React from 'react'
import classes from './FirstBlockHome.module.css'
import SearchComponent from '../searchComponent/SearchComponent'
import ThreeCards from '../homePageComponents/allCards/threeCards/ThreeCards'

function FirstBlockHome() {
    return (
        <div className={classes.home}>
            <div className={classes.container}>
                <div className={classes.home_content_inner}>
                    <div className={classes.two_text_home}>
                        <h1 className={classes.first_text}>
                            Путешествуйте с нами в любой уголок Кыргызстана
                        </h1>
                        <h2 className={classes.second_text}>
                            Легкий способ найти приключения
                        </h2>
                    </div>
                    <div className={classes.search_form}>
                        <SearchComponent />
                    </div>
                </div>
                <ThreeCards />
            </div>
        </div>
    )
}

export default FirstBlockHome
