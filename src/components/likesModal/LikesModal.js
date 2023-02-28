import { Box, Modal } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeLikesModal } from '../../store/slices/authSlice';
import classes from './LikesModal.module.css';
import crossSvg from '../../images/modalImg/Cross2.svg';
import SmallTravelCard from '../smallTravelCard/SmallTravelCard';

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
  const {likesModal} = useSelector(state => state.modalTour)
  const dispatch = useDispatch()
  const closeLikes =() => {
    dispatch(closeLikesModal())
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
              <SmallTravelCard/>
              <SmallTravelCard/>
              <SmallTravelCard/>
              <SmallTravelCard/>
              <SmallTravelCard/>
              <SmallTravelCard/>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default LikesModal