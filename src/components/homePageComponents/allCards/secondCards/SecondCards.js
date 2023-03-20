import React, {useEffect} from 'react'
import classes from './SecondCard.module.css'
import {useDispatch, useSelector} from "react-redux";
import {jeepCardAction, peshCardAction} from "../../../../store/slices/secondCardsSlice";
import {openCardModal} from "../../../../store/slices/authSlice";

//Changed: Zhamal 18.03.23
//SecondCards - две разные статичные карты с переходом на страницу тура

function SecondCards() {

    const dispatch = useDispatch();
    const {jeep, pesh} = useSelector(state => state.secondCards); //secondCardsSlice

    useEffect(() => {
        dispatch(jeepCardAction()); //get one photo
        dispatch(peshCardAction());
    }, []);


    return (
        <div className={classes.card_inner}>
            {/*<div className={classes.card_img}></div>*/}
            {/*<div className={classes.card_img}></div>*/}

            <div className={classes.card_img}>
                <img
                    src={jeep.map(item => item.tour_images[0].images.replace(
                        /(\d{1,3}\.\d{1,3}\.\d{1,3}\.)\d{1,3}/,
                        '$1' + '147:8880'))}
                    className={classes.card_img}
                    onClick={() => {
                        dispatch(openCardModal(jeep.map(item => item.slug)))
                    }}
                />
            </div>

            <div className={classes.card_img}>
                <img
                    src={pesh.map(item => item.tour_images[0].images.replace(
                        /(\d{1,3}\.\d{1,3}\.\d{1,3}\.)\d{1,3}/,
                        '$1' + '147:8880'))}
                    className={classes.card_img}
                    onClick={() => {
                        dispatch(openCardModal(pesh.map(item => item.slug)))
                    }}
                />
            </div>

        </div>

    )
}

export default SecondCards