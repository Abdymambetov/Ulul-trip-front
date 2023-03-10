import { InputBase } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Calendar from '../calendar/Calendar'
import classes from '../firstBlockHome/FirstBlockHome.module.css'
import searchImg from '../../images/firstBlockImg/search.svg'
import coordinates from '../../images/firstBlockImg/coordinates (2).svg'

function SearchComponent() {
    const [activeInput, setActiveInput] = useState(null)
  return (
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
                                        },'& .MuiInputBase-input': {
                                            fontSize: '18px !important'
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
                                <InputBase
                                    type="text"
                                    placeholder="Длительность"
                                    sx={{
                                        '&.Mui-focused': {
                                            border: '2px solid #ff6f32 !important'
                                        },
                                        '& .MuiInputBase-input': {
                                            fontSize: '18px !important'
                                        }
                                    }}
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
                                <InputBase
                                    type="text"
                                    placeholder="Цена"
                                    sx={{
                                        '&.Mui-focused': {
                                            border: '2px solid #ff6f32 !important'
                                        },'& .MuiInputBase-input': {
                                            fontSize: '18px !important'
                                        }
                                    }}
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
  )
}

export default SearchComponent