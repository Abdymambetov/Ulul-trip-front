import React from 'react'
import classes from './LastBlock.module.css'
import GifBlock from './gifBlock/GifBlock'
import AccordionBlock from './accordionBlock/AccordionBlock'

function LastBlock() {
  return (
    <div className={classes.last_block}>
        <div className={classes.container}>
            <div className={classes.last_inner}>
                <GifBlock/>
                <AccordionBlock/>

            </div>
        </div>
    </div>
  )
}

export default LastBlock