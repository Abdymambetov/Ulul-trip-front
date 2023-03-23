import React, { useState } from 'react'
import { Box, Modal } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { closeReviewsModal } from '../../store/slices/authSlice';
import classes from './CardModalPage.module.css'
import crossImg from '../../images/modalImg/Cross2.svg'
import starsImg from '../../images/cardModalImg/Stars.svg'
import { BentoTwoTone } from '@mui/icons-material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { addReviewAction } from '../../store/slices/reviwesSlice';


const style = {
    width: '500px',
    height: '300px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(1.05)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    
    // zIndex: 2,
};
function ModalReviews() {

    const {reviewsModal} = useSelector(state=> state.modalTour)
    const dispatch = useDispatch()
    const [rating,setRating]=useState(1)
    const [text, setText] = useState('')
    const heandleCloseMod = () => {
        dispatch(closeReviewsModal())
    }
    const changeTextArea = (e) => {
        setText(e.target.value)
    } 
    const handleSubmitReview = (e) =>{
        e.preventDefault()
        const param = {text, rating}
        dispatch(addReviewAction(param))
    }      
  return (
    <Modal open = {reviewsModal} onClose = {heandleCloseMod}>
        <Box sx ={style}>
            <div className={classes.reviews}>
                <div className={classes.title_reviews}>
                    <div className={classes.title_text}>Название тура</div>
                    <img src = {crossImg} alt='cross' className={classes.cross}/>
                </div>
                
                <div className={classes.user_reviwes}>
                    <textarea className={classes.post_text} placeholder='Напишите о своих впечатлениях' rows="11" cols="50" onChange={changeTextArea}/>
                </div>

                <div className={classes.rating_and_btn}>
                    <div className={classes.text_and_stars}>
                        <div className={classes.text_rating}>Вася Пупкин</div>
                        <Stack spacing={1}>
                        <Rating name="size-large"  value={rating} onChange={(e,value)=>{
                            console.log(value)
                            setRating(value)
                        }} size="large" />
    </Stack>
                    </div>
                    <button className={classes.btn} onClick={handleSubmitReview}>Опубликовать</button> 
                </div>
            </div>
        </Box>
    </Modal>
  )
}

export default ModalReviews