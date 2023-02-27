import { Box, Modal } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeLikesModal } from '../../store/slices/authSlice';
const style = {
  width: '880px',
  height: '700px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) scale(1.05)',
  bgcolor: 'background.paper',
  border: '0px solid',
  boxShadow: 24,
  p: 4,
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
        onClose={closeLikes}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{backdropFilter: 'blur(5px)'}}
      >
        <Box sx={style}>
          <div> </div>
        </Box>
      </Modal>
    </div>
  )
}

export default LikesModal