import React from 'react';
import classes from './ButtonsFilter.module.css'
function ButtonsFilter() {
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
                    <button className={classes.tours_btn}>Пеший тур</button>
                    <button className={classes.tours_btn}>Конный тур</button>
                    <button className={classes.tours_btn}>Велотур</button>
                    <button className={classes.tours_btn}>Джип тур</button>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default ButtonsFilter