import { Box, Modal } from '@mui/material'
import React from 'react'
import classes from './CardModalPage.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { closeCardModal} from '../../store/slices/authSlice';

const style = {
    width: '990px',
    height: '825px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(1.05)',
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
};
function CardModalPage() {
    const dispatch = useDispatch()
    const {cardModal} = useSelector(state => state.modalTour)
    const closeMod = () => {
        dispatch(closeCardModal())
    }
  return (
    <div>
        <Modal
            open={cardModal}
            onClose={closeMod}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{backdropFilter: 'blur(5px)'}}
        >
        <Box sx={style}>
            <p>Hello</p>
            <button onClick={closeMod}>hello</button>
        </Box>
        </Modal>
    </div>
  )
}

export default CardModalPage