import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SmallTravelCard from '../../../smallTravelCard/SmallTravelCard'
import classes from './OneTour.module.css'
import {getPeshijTutArr, horseTourAction} from "../../../../store/slices/TourSlice";

function OneTour() {
    const showMoreItems = () => {
        dispatch(getPeshijTutArr(visible + visible))
    }
    const dispatch = useDispatch()
    const {visible, horseArr} = useSelector(state => state.tours)
    const slice = horseArr.slice(0, visible);
    useEffect(() => {
        dispatch(horseTourAction())
    }, [])
    return (
        <div>
            <div className={classes.tour}>
                <div className={classes.container}>
                    <div className={classes.tour_inner}>
                        <h1 className={classes.tour_text}>Конные туры</h1>
                        <div className={classes.all_tours}>
                            {
                                slice.map((item) => (
                                    <SmallTravelCard item={item}/>
                                ))
                            }
                        </div>
                        {
                            visible < horseArr.length && (
                                <button className={classes.btn_tour} onClick={showMoreItems}>Показать все места</button>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OneTour