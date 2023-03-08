import React from 'react'
import classes from './ThreeCards.module.css'

function ThreeCards() {
  return (
    <div className={classes.cards}>
        <div className={classes.cards_inner}>
            <div className={classes.small_card}></div>
            <div className={classes.big_card}></div>
            <div className={classes.small_card}></div>
        </div>
    </div>
  )
}

export default ThreeCards