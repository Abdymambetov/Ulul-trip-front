import React, { useState } from 'react'
import classes from './FirstBlockHome.module.css'
import searchImg from '../../images/firstBlockImg/search.svg'

import coordinates from '../../images/firstBlockImg/coordinates (2).svg'
import CardModalPage from '../../pages/cardModalPage/CardModalPage'
import { useDispatch } from 'react-redux'
import { openCardModal } from '../../store/slices/authSlice'
import { Link } from 'react-router-dom'
import Calendar from '../calendar/Calendar'
import { InputBase } from '@mui/material'

function FirstBlockHome() {
    const dispatch = useDispatch()
    const openModal = () => {
        dispatch(openCardModal())
    }
    const [activeInput, setActiveInput] = useState(null)
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
                        <form className={classes.form_inputs}>
                            <div className={classes.parent_input_where}>
                                {activeInput === 1 && (
                                    <label
                                        for="inputs_from_where"
                                        className={classes.label_input_where}
                                    >
                                        Укажите место назначения
                                    </label>
                                )}
                                <InputBase
                                    type="text"
                                    placeholder="Куда"
                                    sx={{
                                        '&.Mui-focused': {
                                            border: '2px solid #ff6f32 !important'
                                        }
                                    }}
                                    className={classes.inputs_from_where}
                                    onFocus={() => setActiveInput(1)}
                                    onBlur={() => setActiveInput(null)}
                                />
                                <img
                                    src={searchImg}
                                    alt="searchImg"
                                    className={classes.search_image}
                                />
                                <img
                                    src={coordinates}
                                    alt="coordinates"
                                    className={classes.coordiante_image}
                                />
                            </div>
                            <div className={classes.parent_input_duration}>
                                {activeInput === 2 && (
                                    <label
                                        for="inputs_from_duration"
                                        className={classes.label_input_duration}
                                    >
                                        Укажите кол-во дней
                                    </label>
                                )}
                                <input
                                    type="text"
                                    placeholder="Длительность"
                                    className={classes.inputs_from_duration}
                                    onFocus={() => setActiveInput(2)}
                                    onBlur={() => setActiveInput(null)}
                                />
                            </div>
                            <div className={classes.parent_input_price}>
                                {activeInput === 3 && (
                                    <label
                                        for="inputs_from_price"
                                        className={classes.label_input_price}
                                    >
                                        Укажите ценовую категорию
                                    </label>
                                )}
                                <input
                                    type="text"
                                    placeholder="Цена"
                                    className={classes.inputs_from_price}
                                    onFocus={() => setActiveInput(3)}
                                    onBlur={() => setActiveInput(null)}
                                />
                            </div>
                            <Calendar />
                            <Link to="search">
                                <button className={classes.form_btn}>
                                    Найти туры
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
            <button onClick={openModal}>hello</button>
            <CardModalPage />
        </div>
    )
}

export default FirstBlockHome
