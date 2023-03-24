import { Box, Modal } from '@mui/material';
import React, { useState } from 'react';
import Heart from "react-heart";
import { useDispatch, useSelector } from 'react-redux';
import crossSvg from '../../images/modalImg/Cross2.svg';
import star from "../../images/smallCardImg/star.svg";
import point from "../../images/smallCardImg/Vector (3).svg";
import { closeLikesModal, openCardModal } from '../../store/slices/authSlice';
import {removeFavorite, removeProduct} from "../../store/slices/likesModalSlice";
import SmallTravelCard from '../smallTravelCard/SmallTravelCard';
import classes from './LikesModal.module.css';


const style = {
  width: '900px',
  height: '100vh',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) scale(1.05)',
  bgcolor: '#E9F3FF;',
  border: '0px solid',
  boxShadow: 24,
  p: 4,
  overflow: 'auto',
};
function LikesModal() {
    const {card} = useSelector(state => state.favorites)
  const {likesModal} = useSelector(state => state.modalTour)
  const dispatch = useDispatch()
  const closeLikes =() => {
    dispatch(closeLikesModal())
  }
    const isFavorite = card.findIndex((el) => el.id === card.id) > -1
    const [active, setActive] = useState(true)
    const [notActive, setNotActive] = useState('heard_focus')
    const handleClick = (el) => {
        if (isFavorite , active === true) {
            console.log(el)
            dispatch(removeFavorite(el));
            setActive(true);
            setNotActive('heard_focus');
        }
    }
    const openModal = e => {
        if (
            e.target.classList.contains('heard') ||
            e.target.classList.contains('heard-back') ||
            e.target.classList.contains('heard_focus') ||
            e.target.tagName === 'path'
        ) {
            return
        } else {
            dispatch(openCardModal(card?.slug))
        }
    }

  return (
    <div>
      <Modal
        open={likesModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{backdropFilter: 'blur(5px)', border: '0px solid', paddingRight: '7px', marginRight: '7px',  scrollRight: '7px'}}
      >
        <Box sx={style}>
          <div className={classes.likes_modal}>
            <div className={classes.parent_likes}>
                <h3 className={classes.likes_tours_text}>Понравившиеся туры</h3>
               <div className={classes.parent_cross}>
                <img src={crossSvg} alt="cross" onClick={closeLikes} className={classes.cross_svg}/>
               </div>
            </div>
            <div className={classes.cards_tour}>
              {
                   card.map((item) => (
                    // <SmallTravelCard item={item}/>
                      <div className={classes.small_card} onClick={openModal}>
                          <div className={classes.parent_card}>
                              <div className={classes.photo_block}>
                                  <div className="photo">
                                      <img
                                          src={item?.tour_images[0]?.images.replace(
                                               /(\d{1,3}\.\d{1,3}\.\d{1,3}\.)\d{1,3}/,
                                              '$1' + '147:8880'
                                           )}

                                          alt="car"
                                          className={classes.card_img}
                                      />
                                      <div
                                          className={notActive}
                                          style={{ width: '32px', height: '32px' }}
                                      >
                                          <Heart
                                              className="heard-back"
                                              isActive={active}
                                              onClick={()=>handleClick(item)}
                                              animationTrigger="both"
                                              inactiveColor="#FF6F32"
                                              activeColor="#FF6F32"
                                              animationDuration={0.1}
                                              style={{ width: '20px', height: '18px' }}
                                          />
                                      </div>
                                  </div>
                              </div>
                              <div className={classes.locatiion_tour}>
                                  <p className={classes.location_tour_text}>
                                      {item?.title}
                                  </p>
                              </div>
                              <div className={classes.location_info}>
                                  <div className={classes.location_region}>
                                      <div className={classes.region_tour}>
                                          <p className={classes.region_text}>{item?.region?.name}</p>
                                          <img
                                              src={point}
                                              alt="point"
                                              className={classes.region_img}
                                          />
                                      </div>
                                      <div className={classes.tour_price}>
                                          <p className={classes.price_number}>
                                              {item?.price}
                                              <span className={classes.price_text}>сом</span>
                                          </p>
                                      </div>
                                      <div className={classes.tour_day}>
                                          <p className={classes.day_number}>
                                              {item?.duration} <span className={classes.day_text}>день</span>
                                          </p>
                                      </div>
                                  </div>
                                  <div className={classes.star_parent}>
                                      <div className={classes.card_star}>
                                          <img src={star} alt="star" />
                                          <p className={classes.rating_text}>{item?.average_rating}</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))
              }

            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default LikesModal