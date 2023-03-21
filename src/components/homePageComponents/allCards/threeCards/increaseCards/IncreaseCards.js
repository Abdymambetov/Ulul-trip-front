import React, {useEffect} from 'react'
import classes from './IncreaseCards.module.css'
import {useDispatch, useSelector} from "react-redux";
import {increaseCardsAction} from "../../../../../store/slices/increaseCardsSlice";

//Changed: Zhamal 18.03.23
//IncreaseCards - три меняющиеся карты

function IncreaseCards() {

    const dispatch = useDispatch();
    const {photos} = useSelector(state => state.increasedCards);

    useEffect(() => {
        const testInterval = setInterval(() => {

            dispatch(increaseCardsAction());

        }, 3000);
        return () => clearInterval(testInterval);
    }, []);


    return (
        <div className={classes.cards}>
            <div className={classes.cards_inner}>

                {/*<div className={classes.small_card}></div>*/}
                {/*<div className={classes.small_card}></div>*/}
                {/*<div className={classes.small_card}></div>*/}

                <div className={classes.small_card}>
                    <img
                        src={photos.slice(0, 1).map(item => item[0].images.replace(
                            /(\d{1,3}\.\d{1,3}\.\d{1,3}\.)\d{1,3}/,
                            '$1' + '147:8880')
                        )
                        }
                        className={classes.small_card}
                    />
                </div>

                <div className={classes.small_card}>
                    <img
                        src={photos.slice(1, 2).map(item => item[0].images.replace(
                            /(\d{1,3}\.\d{1,3}\.\d{1,3}\.)\d{1,3}/,
                            '$1' + '147:8880')
                        )
                        }
                        className={classes.small_card}
                    />
                </div>

                <div className={classes.small_card}>
                    <img
                        src={photos.slice(2, 3).map(item => item[0].images.replace(
                            /(\d{1,3}\.\d{1,3}\.\d{1,3}\.)\d{1,3}/,
                            '$1' + '147:8880')
                        )
                        }
                        className={classes.small_card}
                    />
                </div>
            </div>
        </div>
    )
}

export default IncreaseCards