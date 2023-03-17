import React from 'react'
import classes from './IncreaseCards.module.css'

function IncreaseCards() {
  return (
    <div className={classes.cards}>
        <div className={classes.cards_inner}>
            <div className={classes.small_card}></div>
            <div className={classes.small_card}></div>
            <div className={classes.small_card}></div>
        </div>
    </div>
  )
}

export default IncreaseCards