import { Box, Modal } from '@mui/material'
// import React from 'react'
import axios from "axios"
import React, { useEffect, useState } from "react"
import Heart from "react-heart"
import { useDispatch, useSelector } from 'react-redux'
import SwiperCore, { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"
// import CardModalCalendar from '../../components/calendar/CardModalCalendar'
import googleImg from '../../images/cardModalImg/GoogleTwo.svg'
import groupImg from '../../images/cardModalImg/Group.svg'
import guideImg from '../../images/cardModalImg/guide.svg'
import penImg from '../../images/cardModalImg/pen.svg'
import ratingImg from '../../images/cardModalImg/rating.svg'
import regionImg from '../../images/cardModalImg/region.svg'
import starsImg from '../../images/cardModalImg/Stars.svg'
import walkerImg from '../../images/cardModalImg/walker.svg'
import crossImg from '../../images/modalImg/Cross2.svg'
import "swiper/swiper-bundle.css";
import classes from './CardModalPage.module.css'
import Reviews from './Reviews';
import ModalReviews from './ModalReviews';
import {addProduct, removeProduct} from "../../store/slices/likesModalSlice";
import { getReviwesAction } from '../../store/slices/reviwesSlice'
import { closeCardModal, openReviewsModal } from '../../store/slices/authSlice'

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
SwiperCore.use([Navigation, Pagination])

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
    overflow: 'auto'
}

function CardModalPage() {
    const dispatch = useDispatch()
    const {cardModal, cardInfo} = useSelector(state => state.modalTour)
    const {reviews} = useSelector(state => state.review)
    const closeMod = () => {
        dispatch(closeCardModal())
    }
    const [products, setProducts] = useState({});

    useEffect(() => {
      const fetchProducts = async () => {
        const response  = await axios.get(`http://164.92.190.147:8880/home/tour/${cardInfo}`)
        const data = await response.data
        setProducts(data);
        
      };

      fetchProducts();
      dispatch(getReviwesAction(products?.slug))
    }, [cardInfo]);
    console.log(products)


    const heandleOpenReviews = () => {
        dispatch(openReviewsModal())
    }
    const {card} = useSelector(state => state.favorites)
    const [active, setActive] = useState(true)
    const [notActive, setNotActive] = useState('heard_focus')
    const isFavorite = card.findIndex(el =>el.id === products.id)
    const handleClick = (el) => {
        if (isFavorite, active === true) {
            dispatch(removeProduct(el));
            setActive(true);
            setNotActive('heard_focus');
        } else if (isFavorite , active === false) {
            dispatch(addProduct(el));
            setActive(true);
            setNotActive('heard_focus')
        } else {
            dispatch(addProduct(el));
            setActive(true);
            setNotActive('heard_focus');
        }
    }
    const Favorite = card.some((el) => el.id === products.id);
    const heartColor = Favorite ? "#FF6F32" : "#BDBDBD";
    console.log(products)
    const date = {
        back:products.date_arrival,
        gone:products.date_departure
    }
    return (
    <div>
        <Modal
            open={cardModal}
            onClose={closeMod}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{backdropFilter: 'blur(5px)', overflow: 'auto',
        '& .MuiBox-root ':{
            padding: '0px'
        }}}
        >
        <Box sx={style}>
                <div className={classes.modal_inner}>
                    <div className={classes.cross_block}>
                    <img src = {crossImg} alt='cross' className={classes.cross}/>
                    </div>
                    <div className={classes.block_reviwes}>
                        <div className= {classes.slider}>
                        <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                    >
                            {/* {
                                products?.tour_images?.map(item=>
                                    <SwiperSlide >
                                        <img src={item?.images.replace(
                                    /(\d{1,3}\.\d{1,3}\.\d{1,3}\.)\d{1,3}/,
                                    '$1' + '147:8880' 
                                )} alt='hello'/>
                                 </SwiperSlide>)
                            }                         */}
                            

                        </Swiper>
                        </div>
                    
                        <div className={classes.text}>
                           {products?.description}
                    </div>
                    <div className={classes.reviwes}>
                        <div className={classes.title}>Отзывы</div>
                        <img src ={penImg} alt='pen' className={classes.icon_pen} onClick={heandleOpenReviews}/> 
                    </div> 
                    {
                        reviews.map(info => 
                            <Reviews key={info?.id} info={info}/>  
                        )
                    }
                       
                
                    </div>
                    </div>
                    <div className={classes.block_booking}>
                         <div className={classes.heart_header}>
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
                    </div>

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
                            </div>
                            <hr className={classes.line_two}></hr>
        
        
        
                    <div className={classes.duration_and_price}>
                            <div className={classes.duration}>
                                <img src ={regionImg} alt = 'r' className={classes.duration_image}/>
                                <div className={classes.duration_text}>Длительность</div>
                            </div>
                            <div className={classes.price}>
                                <img src ={groupImg} alt ='g' className={classes.price_image}/>
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
                            <Stack spacing={1}>
                                <Rating name="size-large"  value={products?.average_rating} size="large" readOnly
                                className={classes.stars_image}/>
                            </Stack>
                            {/* <img src ={starsImg} alt ='stars' className={classes.stars_image}/> */}
        
                            
                        <div className={classes.walker_and_google}>
                        <div className={classes.display}>
                        <div className={classes.walker}>
                                <img src ={walkerImg} alt = 'w' className={classes.walker_image}/>
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
                                        <img src ={guideImg} alt ='g' className={classes.guide_image}/>
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
                     {/* <div className={classes.data}>
                        <span className={classes.data_title}>ДОСТУПНЫЕ ДАТЫ</span>
                        <CardModalCalendar propsDate={date}/>
                     </div> */}
                </div>
            <ModalReviews products={products}/>
        </Box>  
        </Modal>
    </div> 
  )
}

export default CardModalPage
