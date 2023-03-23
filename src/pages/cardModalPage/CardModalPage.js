import { Box, Modal } from '@mui/material'
// import React from 'react'
import classes from './CardModalPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {closeCardModal, openCardModal, openReservationModal, openReviewsModal} from '../../store/slices/authSlice'
import penImg from '../../images/cardModalImg/pen.svg'
import starsImg from '../../images/cardModalImg/Stars.svg'
import heartImg  from '../../images/cardModalImg/heart.svg'
import regionImg from '../../images/cardModalImg/region.svg'
import groupImg from '../../images/cardModalImg/Group.svg'
import ratingImg from '../../images/cardModalImg/rating.svg'
import guideImg from '../../images/cardModalImg/guide.svg'
import walkerImg from '../../images/cardModalImg/walker.svg'
import googleImg from '../../images/cardModalImg/GoogleTwo.svg'
import vasyaImg from '../../images/cardModalImg/vasya.png'
import crossImg from '../../images/modalImg/Cross2.svg'
import timeImg from '../../images/cardModalImg/time.svg'
import priceImg from '../../images/cardModalImg/price.svg'
import warningImg from '../../images/cardModalImg/warning.svg'
import gidImg from '../../images/cardModalImg/gid.svg'
import Reservetion from './ReservationComponent/Reservation'
// import rideImg from '../../images/cardModalImg/rider.svg'
// import jeepImg from '../../images/cardModalImg/jeep.svg'
// import bikerImg from '../../images/cardModalImg/biker.svg'

import React, { useState, useEffect } from "react";
import axios from "axios";
// import SwiperCore, { Navigation, Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
import Reviews from './Reviews';
import ModalReviews from './ModalReviews';
import Reservation from './ReservationComponent/Reservation'
// import { tourInfoAction } from '../../store/slices/TourSlice';
// import { useParams } from 'react-router-dom';
// import {addProduct, removeProduct} from "../../store/slices/likesModalSlice";
// import Heart from "react-heart";
// import {Favorite} from "@mui/icons-material";


const style = {
    width: '990px',
    height: '100vh',
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(1.05)',
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
    
};
function CardModalPage() {
    const dispatch = useDispatch()
    const {cardModal, cardInfo, reservationModal} = useSelector(state => state.modalTour)
    
    const closeMod = () => {
        dispatch(closeCardModal())
    }
    const [products, setProducts] = useState({});
    const openReservation = () => {
        dispatch (openReservationModal())
    }
    useEffect(() => {
      const fetchProducts = async () => {
        const response  = await axios.get(`http://164.92.190.147:8880/home/tour/${cardInfo}`);
        const data = await response.data
        setProducts(data);
        
      };

      fetchProducts();
    }, [cardInfo]);
    console.log(products)


    const heandleOpenReviews = () => {
        dispatch(openReviewsModal())
    }
    // const {card} = useSelector(state => state.favorites)
    // const [active, setActive] = useState(true)
    // const [notActive, setNotActive] = useState('heard_focus')
    // const isFavorite = card.findIndex(el =>el.id === products.id)
    // const handleClick = (el) => {
    //     if (isFavorite, active === true) {
    //         dispatch(removeProduct(el));
    //         setActive(true);
    //         setNotActive('heard_focus');
    //     } else if (isFavorite , active === false) {
    //         dispatch(addProduct(el));
    //         setActive(true);
    //         setNotActive('heard_focus')
    //     } else {
    //         dispatch(addProduct(el));
    //         setActive(true);
    //         setNotActive('heard_focus');
    //     }
    // }
    // const Favorite = card.some((el) => el.id === products.id);
    // const heartColor = Favorite ? "#FF6F32" : "#BDBDBD";


    return (
    <div>
        <Modal
            open={cardModal}
            onClose={closeMod}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{backdropFilter: 'blur(5px)',
        '& .MuiBox-root ':{
            padding: '0px'
        }}}
        >
        <Box sx={style}>
                <div className={classes.modal_inner}>
                    <div className={classes.cross_block}>
                    <img src = {crossImg} alt='cross' className={classes.cross_main} onClick ={closeMod} />
                    </div>
                    <div className={classes.block_reviwes}>
                    {/* <div className={classes.slider_block}> */}
                    {/* <div className= {classes.slider}> */}
                        
                        {/* <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        
                    >
                        {/*<SwiperSlide >*/}
                            {/* {
                                products?.tour_images?.map(item=><img src={item?.images.replace(
                                    /(\d{1,3}\.\d{1,3}\.\d{1,3}\.)\d{1,3}/,
                                    '$1' + '147:8880' 
                                )} alt='hello'/>)
                            }                         */}
                            
                        {/*</SwiperSlide>*/}

                        {/* </Swiper> */}
                        {/* </div> */}
                    
                        <div className={classes.text}>
                           {products?.description}
                    </div>
                    <div className={classes.reviwes}>
                        <div className={classes.reviwes_title}>
                        <div className={classes.title}>Отзывы</div>
                        <img src ={penImg} alt='pen' className={classes.icon_pen} onClick={heandleOpenReviews}/> 
                        </div>
                       
                        
                        <div className={classes.all_reviwes}>
                        <Reviews/>  
                        <Reviews/>  
                        <Reviews/>  
                        <Reviews/>  
                        <Reviews/>  
                        <Reviews/>  
                        <Reviews/>  
                        <Reviews/>
                
                    </div>
                    </div>
                    


                {/* </div> */}
                </div>
                <div className={classes.block_booking}>
                         {/* <div className={classes.heart_header}>
                        <div className={notActive} style={{width: "32px", height: "32px", }}>
                            <Heart  c className="heard-back"
                                    isActive={Favorite}
                                    onClick={() => handleClick(products)}
                                    animationTrigger="both"
                                    activeColor='#FF6F32'
                                    inactiveColor="#FF6F32"
                                    animationDuration={0.1}
                                    style={{ width: '20px', height: '18px' }}
                                    color={heartColor}
                            />
                        </div>
                    </div> */}

                    <div className={classes.location_and_level}>
                            <div className={classes.region}>
                                <img src ={regionImg} alt = 'r' className={classes.region_image}/>
                                <div className={classes.region_text}>Область</div>
                            </div>
                            <div className={classes.level}>
                                <img src ={groupImg} alt ='g' className={classes.group_image}/>
                                <div className={classes.level_text}>Сложность</div>
                            </div>    
                    </div>
                    <div className={classes.user_choice}>

                                <div className={classes.region_name}>{products?.region?.map(par => <p>{par.name}</p>)}</div>
                                <div className={classes.level_name}>{products?.complexity}</div>
                                <img src ={warningImg} alt = 'w' className={classes.warning_image}/>
                            </div>
                            <hr className={classes.line_two}></hr>  
        
        
        
                    <div className={classes.duration_and_price}>
                            <div className={classes.duration}>
                                <img src ={timeImg} alt = 'time' className={classes.duration_image}/>
                                <div className={classes.duration_text}>Длительность</div>
                            </div>
                            <div className={classes.price}>
                                <img src ={priceImg} alt ='g' className={classes.price_image}/>
                                <div className={classes.price_text}>Цена</div>
                            </div>    
                    </div>
                    
                    <div className={classes.user_choice_two}>
                        <div className={classes.days}>
                            <div className={classes.days_number}>{products?.duration}</div>
                            <div className={classes.days_text}>дня</div>
                        </div>
                        <div className={classes.choice_price}>
                            <div className={classes.price_number}>{products?.price}</div>
                            <div className={classes.price_som}>som</div>
                        </div>
                    </div>
                            <hr className={classes.line_two}></hr>
                            
                        <div className={classes.rating_and_guide}>
        
                    
        
                            
                            <div className={classes.rating}>
                                <img src = {ratingImg} alt ='r' className={classes.rating_image}/>
                                <div className={classes.rating_text}>Рейтинг</div>
                            </div>
                            <img src ={starsImg} alt ='stars' className={classes.stars_image}/>
        
                            
                        <div className={classes.walker_and_google}>
                        <div className={classes.display}>
                        <div className={classes.walker}>
                            {/* <img src ={imageSrc} alt = 'w' className={classes.walker_image}/> */}
                                <div className={classes.walker_text}>{products?.category?.name}</div>
                                {/* <div className={classes.walker_text_two}>тур</div> */}
                            </div>
                        <div className={classes.google}>
                            <div className={classes.google_text_and_image}>
                                
                                <img src ={googleImg} alt ='g' className={classes.google_image}/>
                                
                            </div> 
                            
                        </div>
                        </div>
                        
                        <div className={classes.guide}>
                                <div className={classes.guide_text_and_image_h}>
                                    <div className={classes.guide_text_and_image}>
                                        <img src ={gidImg} alt ='g' className={classes.guide_image}/>
                                        <div className={classes.guide_text}>Гид</div>
                                    </div>
                                    <img src ={products?.guide?.photo.replace(
                                    /(\d{1,3}\.\d{1,3}\.\d{1,3}\.)\d{1,3}/,
                                    '$1' + '147:8880' 
                                )} alt = 'vasya' className={classes.vasya_image}/>
                                    <div className={classes.vasya_text}>{products?.guide?.get_initials}</div>
                                </div>
                            </div>
                        </div>
                    
                        
                        </div>
        

                        <div className={classes.calendar}>
        
                        </div>

                        <button className={classes.reservation} onClick = {openReservation} >Забронировать</button>
                        <Reservation/>
                    </div>

            <ModalReviews/>
            </div>
        </Box>  
        </Modal>
    </div>
 )
}

export default CardModalPage
