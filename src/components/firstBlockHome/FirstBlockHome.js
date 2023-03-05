import React, { useState } from 'react'
import classes from './FirstBlockHome.module.css'
import CardModalPage from '../../pages/cardModalPage/CardModalPage'
import { useDispatch } from 'react-redux'
import { openCardModal } from '../../store/slices/authSlice'
import SearchComponent from '../searchComponent/SearchComponent'

function FirstBlockHome() {
    const dispatch = useDispatch()
    const openModal = () => {
        dispatch(openCardModal())
    }
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
                        <SearchComponent/>
                    </div>
                </div>
            </div>
            <button onClick={openModal}>hello</button>
            <CardModalPage />
        </div>
    )
}

export default FirstBlockHome
