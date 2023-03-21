import React, {useEffect} from 'react'
import classes from './IncreaseCards.module.css'
import {useDispatch, useSelector} from "react-redux";
import {increaseCardsAction} from "../../../../../store/slices/increaseCardsSlice";
import {openCardModal} from "../../../../../store/slices/authSlice";

//Changed: Zhamal 18.03.23
//IncreaseCards - три меняющиеся карты

function IncreaseCards() {

    const dispatch = useDispatch();
    const {photos} = useSelector(state => state.increasedCards);

    useEffect(() => {

        dispatch(increaseCardsAction());

        const testInterval = setInterval(() => {

            dispatch(increaseCardsAction());

        }, 5000);
        return () => clearInterval(testInterval);
    }, []);
    //
    const hotImg = photos.map(item => item.tour_images.filter(image => image.is_main)[0].images.replace(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.)\d{1,3}/, '$1' + '147:8880'));
    const hotDesc = photos.map(item => item.title);
    const slugs = photos.map(item => item.slug);
    console.log(hotDesc[0])
    console.log(hotImg[1])

    return (
        <div className={classes.cards}>
            <div className={classes.cards_inner}>

                <div className={classes.small_card}
                     onClick={() => {
                         dispatch(openCardModal(slugs[0]))
                     }}
                >
                    <img
                        src={hotImg[0]}
                        className={classes.small_card}
                    />
                    <div className={classes.small_card_label}>
                        <p className={classes.small_card_desc}>
                            {hotDesc[0]}
                        </p>
                    </div>
                </div>

                {
                    hotImg[1] != null &&
                    <div className={classes.small_card}
                         onClick={() => {
                             dispatch(openCardModal(slugs[1]))
                         }}
                    >
                        <img
                            src={hotImg[1]}
                            className={classes.small_card}
                        />
                        <div className={classes.small_card_label}>

                            <p className={classes.small_card_desc}>
                                {hotDesc[1]}
                            </p>
                        </div>
                    </div>
                }

                {
                    hotImg[2] != null &&
                    <div className={classes.small_card}
                         onClick={() => {
                             dispatch(openCardModal(slugs[2]))
                         }}
                    >
                        <img
                            src={hotImg[2]}
                            className={classes.small_card}
                        />
                        <div className={classes.small_card_label}>
                            <p className={classes.small_card_desc}>
                                {hotDesc[2]}
                            </p>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}

export default IncreaseCards