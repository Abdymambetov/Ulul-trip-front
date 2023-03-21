import React, {useEffect} from 'react'
import classes from './ThreeCards.module.css'
import {useDispatch, useSelector} from "react-redux";
import {
    hotCardAction,
    leftCardAction,
    rightCardAction
} from "../../../../store/slices/threeMainCardsSlice";
import {useNavigate} from "react-router-dom";
import {openCardModal} from "../../../../store/slices/authSlice";
//Changed: Zhamal 20.03.23
//ThreeCards - три разные меняющиеся карты (главные)

function ThreeCards() {

    const dispatch = useDispatch();
    const {leftPhotos, rightPhotos , hotPhotos} = useSelector(state => state.threeMainCards);


    useEffect(() => {

        dispatch(leftCardAction());
        dispatch(rightCardAction());
        dispatch(hotCardAction());


        const testInterval = setInterval(() => {

            dispatch(leftCardAction());
            dispatch(rightCardAction());
            dispatch(hotCardAction());

        }, 5000);
        return () => clearInterval(testInterval);
    }, []);

    const navigate = useNavigate();
    const goToSearch = () => {
        navigate("/search"
            //     , {
            //     state: {
            //         tourId: e.target.id,
            //         tourName: e.target.title
            //     }
            // }
        )
    }

    //left
    const filteredLeftTours = leftPhotos.photos
        // .filter(tour => !tour.is_hot) // is_hot = false
        .map(({ id, title, slug, tour_images }) => ({
            id,
            title,
            slug,
            tour_images: tour_images
                .filter(image => image.is_main) // is_main = true
                .map(image => image.images) //URL
        }));
    const leftImg = filteredLeftTours.map(item=>item.tour_images[0]
        .replace(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.)\d{1,3}/,'$1' + '147:8880'));
    const leftDesc = filteredLeftTours.map(item=>item.title);



    //middle
    const filteredHotTours = hotPhotos.photos
        .map(({ id, title, slug, tour_images }) => ({
            id,
            title,
            slug,
            tour_images: tour_images
                .filter(image => image.is_main) // is_main = true
                .map(image => image.images), // URL
        }));
    const hotImg = filteredHotTours.map(item=>item.tour_images[0]
        .replace(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.)\d{1,3}/,'$1' + '147:8880'));
    const hotDesc = filteredHotTours.map(item=>item.title);



    //right
    const filteredRightTours = rightPhotos.photos
        // .filter(tour => !tour.is_hot) // is_hot = false
        .map(({ id, title, slug, tour_images }) => ({
            id,
            title,
            slug,
            tour_images: tour_images
                .filter(image => image.is_main) // is_main = true
                .map(image => image.images) //URL
        }));
    const rightImg = filteredRightTours.map(item=>item.tour_images[0]
        .replace(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.)\d{1,3}/,'$1' + '147:8880'));
    const rightDesc = filteredRightTours.map(item=>item.title);




    return (
        <div className={classes.cards}>
            <div className={classes.cards_inner}>


                <div className={classes.small_card}
                     onClick={goToSearch}
                >
                    <img
                        src={leftImg}
                        className={classes.small_card}
                    />
                    <div className={classes.small_card_label}>
                        <h2 className={classes.small_card_title}>
                            Конные туры
                        </h2>
                        <p className={classes.small_card_desc}>
                            {leftDesc}
                        </p>
                    </div>
                </div>



                <div className={classes.big_card}
                     onClick={() => {
                         dispatch(openCardModal(filteredHotTours.map(item=>item.slug)))
                     }}
                >
                    <img
                        src={hotImg}
                        className={classes.big_card}
                    />
                    <div className={classes.big_card_label}>
                        <h2 className={classes.big_card_title}>
                            Горячие туры
                        </h2>
                        <p className={classes.big_card_desc}>
                            {hotDesc}
                        </p>
                    </div>
                </div>



                <div className={classes.small_card}
                     onClick={goToSearch}
                >
                    <img
                        src={rightImg}
                        className={classes.small_card}
                    />
                    <div className={classes.small_card_label}>
                        <h2 className={classes.small_card_title}>
                            Велотуры
                        </h2>
                        <p className={classes.small_card_desc}>
                            {rightDesc}
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ThreeCards