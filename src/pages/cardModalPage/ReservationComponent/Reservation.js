import React from 'react'
import { Box, Modal } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { closeResevationModal } from '../../../store/slices/authSlice';
import classes from './ReservationComponent.module.css'
import qrImg from '../../../images/cardModalImg/qr.png'
import crossImg from '../../../images/modalImg/Cross2.svg'
const style = {
    width: '475px',
    height: '645px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(1.05)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    zIndex: 2

}
function Reservation() {
    const {reservationModal} = useSelector(state=>state.modalTour)
    const dispatch = useDispatch()
    const closeModal = ()=> {
        dispatch (closeResevationModal())
    }
  return (
   <Modal open ={reservationModal} onClose = {closeModal} 
   aria-labelledby="modal-modal-title"
   aria-describedby="modal-modal-description"
   sx={{backdropFilter: 'blur(5px)',
'& .MuiBox-root ':{
   padding: '0px'
}}}>
    <Box sx = {style}> 
    <div className={classes.reservation_inner}>
    <img src ={crossImg} alt ='cross' className={classes.qr_cross} onClick = {closeModal}/>
        <img src = {qrImg} alt ='qr' className={classes.qr_image}/>
        <div className={classes.all_qr}>
            <div className={classes.qr_text}>
            Для того чтобы забронировать место на данный тур отсканируйте данный QR-код.
             </div>
            <div className={classes.qr_text_two}>
            Вас направит к телеграмм боту, отправьте ему данный идентификатор тура
            </div>
        </div>
        <hr className={classes.qr_line}/>
        <div className={classes.qr}>QE35UUYJ5</div>
    </div>
   
    </Box>
   </Modal>
  )
}

export default Reservation