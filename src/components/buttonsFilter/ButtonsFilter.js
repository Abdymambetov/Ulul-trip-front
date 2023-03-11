import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryAction } from '../../store/slices/TourSlice';
import classes from './ButtonsFilter.module.css'
function ButtonsFilter() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(categoryAction())
  }, [])
  const {categoryArr} = useSelector(state => state.tours)
  return (
    <div className={classes.button}>
        <div className={classes.container}>
            <div className={classes.button_inner}>
                 <div className={classes.buttons_tour}>
                    <button className={classes.tours_btn}>Легкий</button>
                    <button className={classes.tours_btn}>Средний</button>
                    <button className={classes.tours_btn}>Сложный</button>
                    <button className={classes.tours_btn}>Экстремальный</button>
                 </div>
                 <div className={classes.buttons_tour}>
                    {categoryArr.map((item) => (
                      <button className={classes.tours_btn} key={item?.id}>{item?.name}</button>
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