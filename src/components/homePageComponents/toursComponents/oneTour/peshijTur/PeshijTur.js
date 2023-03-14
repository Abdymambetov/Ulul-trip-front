import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getPeshijTutArr, oneTour} from '../../../../../store/slices/TourSlice'
import SmallTravelCard from '../../../../smallTravelCard/SmallTravelCard'
import classes from '../OneTour.module.css'


function PeshijTur() {
    const showMoreItems = () => {
        dispatch(getPeshijTutArr(visible + visible))
    }
  const dispatch = useDispatch()
  const {items, visible} = useSelector(state => state.tours)
  useEffect(() => {
    dispatch(oneTour())
  }, [])
  return (
    <div>
      <div className={classes.tour}>
      <div className={classes.container}>
        <div className={classes.tour_inner}>
                  <h1 className={classes.tour_text}>Пешие туры</h1>
                  <div className={classes.all_tours}>
                    {
                        items.slice(0, visible).map((item) => (
                        <SmallTravelCard item={item}/>
                      ))
                    }
                  </div>
            {
                visible < items.length && (
                    <button className={classes.btn_tour} onClick={showMoreItems}>Показать все места</button>
                )
            }

        </div>
    </div>
    </div>
    </div>
  )
}

export default PeshijTur