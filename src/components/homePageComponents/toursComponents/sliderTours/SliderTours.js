import React from 'react'
import classes from './SliderTours.module.css'
import leftArrow from '../../../../images/sliderImg/leftArrow.svg';
import rightArrow from '../../../../images/sliderImg/rightArrow.svg'
import SmallTravelCard from '../../../smallTravelCard/SmallTravelCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { jeepsToursAction} from '../../../../store/slices/TourSlice';
import Slider from 'react-slick';

function SamplePrevArrow({onClick, currentSlide}) {
    return (
        <>
            {currentSlide !== 0 && (
                <div className={classes.buttons_arrow} onClick={onClick}>
                    <button className={classes.left_btn}>
                        <img src={leftArrow} alt="" />
                    </button>
                </div>)
            }
        </>
    );
};

function SampleNextArrow ({onClick,slideCount, currentSlide}) {
    return (
        <>
            {currentSlide !== slideCount - 4 && (
                <div className={classes.buttons_arrow} onClick={onClick}>
                    <button className={classes.right_btn}>
                        <img src={rightArrow} alt="" />
                    </button>
                </div>)
            }
        </>
    );
};
function SliderTours() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    const dispatch = useDispatch()
    const {jeepTourArr } = useSelector(state => state.tours)
    useEffect(() => {
        dispatch(jeepsToursAction())
    }, [])
  return (
    <div className={classes.slider}>
            <div className={classes.container}>
                    <div className={classes.slider_inner}>
                        <h1 className={classes.tours_text}>Джип туры</h1>
                        <div className={classes.cards_slider}>
                            <Slider {...settings}>
                            {
                                jeepTourArr.map((item) => (
                                    <SmallTravelCard  item={item}/>
                                ))
                            }
                            </Slider>
                            {/* <SmallTravelCard/>
                    <SmallTravelCard/>
                    <SmallTravelCard/>
                    <SmallTravelCard/> */}
                        </div>
                    </div>
            </div>

    </div>
  )
}

export default SliderTours