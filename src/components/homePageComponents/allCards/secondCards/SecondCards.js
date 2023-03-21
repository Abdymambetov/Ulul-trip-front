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


    const firstImg = jeep.map(item=>item.tour_images.filter(image => image.is_main)[0].images.replace(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.)\d{1,3}/,'$1' + '147:8880'));
    const firstDesc = jeep.map(item=>item.title);
    const secondImg = pesh.map(item=>item.tour_images.filter(image => image.is_main)[0].images.replace(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.)\d{1,3}/,'$1' + '147:8880'));
    const secondDesc = pesh.map(item=>item.title);

    return (
        <div className={classes.card_inner}>

            <div className={classes.big_card}>
                <img
                    src={firstImg}
                    className={classes.big_card}
                    onClick={() => {
                        dispatch(openCardModal(jeep.map(item => item.slug)))
                    }}
                />
                <div className={classes.big_card_label}>
                    <h2 className={classes.big_card_title}>
                        Джип туры
                    </h2>
                    <p className={classes.big_card_desc}>
                        {firstDesc}
                    </p>
                </div>
            </div>

            <div className={classes.big_card}>
                <img
                    src={secondImg}
                    className={classes.big_card}
                    onClick={() => {
                        dispatch(openCardModal(pesh.map(item => item.slug)))
                    }}
                />
                <div className={classes.big_card_label}>
                    <h2 className={classes.big_card_title}>
                        Пешие туры
                    </h2>
                    <p className={classes.big_card_desc}>
                        {secondDesc}
                    </p>
                </div>
            </div>

        </div>

    )
}

export default SecondCards