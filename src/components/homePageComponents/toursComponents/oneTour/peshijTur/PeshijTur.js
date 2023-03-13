
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { peshijTurAction } from '../../../../../store/slices/TourSlice'
import SmallTravelCard from '../../../../smallTravelCard/SmallTravelCard'
import classes from '../OneTour.module.css'
function PeshijTur() {
  const dispatch = useDispatch()
  const {peshijTurArr} = useSelector(state => state.tours)
  useEffect(() => {
    dispatch(peshijTurAction())
  }, [])
  return (
    <div>
      <div className={classes.tour}>
      <div className={classes.container}>
        <div className={classes.tour_inner}>
                  <h1 className={classes.tour_text}>Пешие туры</h1>
                  <div className={classes.all_tours}>
                    {
                      peshijTurArr.map((item) => (
                        <SmallTravelCard item={item}/>
                      ))
                    }
                  </div>
                  <button className={classes.btn_tour}>Показать все места</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default PeshijTur