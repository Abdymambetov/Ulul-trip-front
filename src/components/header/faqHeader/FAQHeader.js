import React from 'react'
import classes from './FAQHeader.module.css'
import HeadIcon from '..//..//..//images/fagpageimg/Frame (1).svg'
import gestion from '..//..//..//images/fagpageimg/question_answer.svg'

function FAQHeader() {
  return (
    <div>
         <div className={classes.header}>

          <div className={classes.container}>

            <div className={classes.headerinfo}>
              <div className={classes.info}>
                <img src={HeadIcon} alt="heard" />
                <h3>Snail Trip</h3>
                </div>
                <div className={classes.messages}>
                  <img src={gestion} alt="messages" />
                  <p>Написать нам</p>
                </div>
              </div>

              <div className={classes.heplinfo}>
                  <h1>Как мы можем помочь?</h1>
                  <p>Здесь мы собрали ответы  на самые важные и популярные вопросы, связанные с турами.</p>
              </div>
          
              </div>

      </div>
    </div>
  )
}

export default FAQHeader