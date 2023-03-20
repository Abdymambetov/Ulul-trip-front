import React, {useEffect} from 'react'
import classes from './ThreeCards.module.css'
import {useDispatch, useSelector} from "react-redux";
import {hotCardAction, peshCardAction, veloCardAction} from "../../../../store/slices/threeMainCardsSlice";

//Changed: Zhamal 18.03.23
//ThreeCards - три разные меняющиеся карты

function ThreeCards() {

    const dispatch = useDispatch();
    const {peshPhotos, veloPhotos, hotPhotos} = useSelector(state => state.threeMainCards);

    useEffect(() => {
        const testInterval = setInterval(() => {

            dispatch(peshCardAction());
            dispatch(veloCardAction());
            dispatch(hotCardAction());

        }, 7000);
        return () => clearInterval(testInterval);
    }, []);


    return (
        <div className={classes.cards}>
            <div className={classes.cards_inner}>
                {/*<div className={classes.small_card}></div>*/}
                {/*<div className={classes.big_card}></div>*/}
                {/*<div className={classes.small_card}></div>*/}

                <div className={classes.small_card}>
                    <img
                        src={peshPhotos.photos.map(item => item[0].images.replace(
                            /(\d{1,3}\.\d{1,3}\.\d{1,3}\.)\d{1,3}/,
                            '$1' + '147:8880'))}
                        className={classes.small_card}
                    />
                </div>

                <div className={classes.big_card}>
                    <img
                        src={hotPhotos.photos.map(item => item[0].images.replace(
                            /(\d{1,3}\.\d{1,3}\.\d{1,3}\.)\d{1,3}/,
                            '$1' + '147:8880'))}
                        className={classes.big_card}
                    />
                </div>

                <div className={classes.small_card}>
                    <img
                        src={veloPhotos.photos.map(item => item[0].images.replace(
                            /(\d{1,3}\.\d{1,3}\.\d{1,3}\.)\d{1,3}/,
                            '$1' + '147:8880'))}
                        className={classes.small_card}
                    />
                </div>


            </div>
        </div>
    )
}

export default ThreeCards