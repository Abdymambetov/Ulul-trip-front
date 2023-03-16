import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setComplexity } from '../../store/slices/FilterTour'
import { categoryAction } from '../../store/slices/TourSlice'
import classes from './ButtonsFilter.module.css'
const complexityList = ['Легкий', 'Средний', 'Сложный', 'Экстремальный']
function ButtonsFilter() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(categoryAction())
    }, [])
    const { categoryArr } = useSelector(state => state.tours)
    const handleSetComplexity = param => {
        dispatch(setComplexity(param))
    }
    const handleSetCategory = () => {}
    return (
        <div className={classes.button}>
            <div className={classes.container}>
                <div className={classes.button_inner}>
                    <div className={classes.buttons_tour}>
                        {complexityList.map(item => (
                            <button
                                onClick={() => {
                                    handleSetComplexity(item)
                                }}
                                className={classes.tours_btn}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    <div className={classes.buttons_tour}>
                        {categoryArr.map(item => (
                            <button
                                onClick={() => {}}
                                className={classes.tours_btn}
                                key={item?.id}
                            >
                                {item?.name}
                            </button>
                        ))}
                        {/* <button className={classes.tours_btn}>Пеший тур</button>
                    <button className={classes.tours_btn}>Конный тур</button>
                    <button className={classes.tours_btn}>Велотур</button>
                    <button className={classes.tours_btn}>Джип тур</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ButtonsFilter
