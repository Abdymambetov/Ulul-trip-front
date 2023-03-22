import React from 'react'
import { Modal, Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { closeDeleteModal } from '../../../../store/slices/authSlice'
import { deleteProfileAction } from '../../../../store/slices/profileSlice'
const style = {
    width: '600px',
    height: '602px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(0.9)',
    bgcolor: '#FFFFFF',
    borderRadius: '24px',
    boxShadow: 24
}
function DeleteProfileModal() {
    const {deleteModal} = useSelector(state => state.modalTour)
    const dispatch = useDispatch()
    const closeMod = () => {
        dispatch(closeDeleteModal())
    }
    const {id} = JSON.parse(localStorage.getItem('token')) 
    const deleteUser = () => {
        dispatch(deleteProfileAction(id))
    }
  return (
    <Modal 
        open={deleteModal}
        onClose={closeMod}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ backdropFilter: 'blur(5px)' }}
    >
        <Box sx={style}>
            <div>
                <h1>Вы точно хотите удалить свой пофиль?</h1>
                <div>
                    <button onClick={deleteUser}>Да</button>
                    <button>Нет</button>
                </div>
            </div>
        </Box>
    </Modal>
  )
}

export default DeleteProfileModal