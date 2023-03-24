import React, { useState } from 'react'
import { Modal, Box, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { closeCheckDigitsModal } from '../../../../../store/slices/authSlice'
import SixDigitInput from './SixDigitInput';
import { chechDigitsAction } from '../../../../../store/slices/registerSlice';
import classes from './RequestReset.module.css'
import croosImg from '../../../../../images/modalImg/Cross2.svg'

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
function CheckDigits() {
    const {checkDigitsModal} = useSelector(state => state.modalTour)
    const dispatch = useDispatch()
    const [digits, setDigits] = useState('')
    // const [digits, setDigits] = useState(['', '', '', '', '', '']);

    // const handleDigitsChange = (newDigits) => {
    //   setDigits(newDigits);
    // };
  
    // const handleSubmit = (number) => {
    //   console.log(`Submitting number ${number} to server...`);
    //   // здесь можно отправить число на сервер с помощью fetch или других методов
    //   const filteredDigits = digits.filter(digit => digit !== '').map(digit => Number(digit.join('')));
    //   const passDigit = {filteredDigits}
    //   dispatch(chechDigitsAction(passDigit))
    // };
    const changeDigitsNumber = (e) => {
      setDigits(e.target.value)
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(chechDigitsAction(digits))
    }
    const closeCheckDigits = () => {
      dispatch(closeCheckDigitsModal())
    }
  return (
    <Modal 
        open={checkDigitsModal}
        onClose = {closeCheckDigits}
    >
        <Box sx={style}>
          <div>
          <div className={classes.cross_parent}>
                <img
                    src={croosImg}
                    alt="cross"
                    onClick={closeCheckDigits}
                    className={classes.croos_ulul}
                />
            </div>
            <form className={classes.from_inputs}>
              <h2 className={classes.text_email}>Check digits</h2>
              <TextField
              id="outlined-basic"
              label="digits"
              variant="outlined"
              name="digits"
              value={digits}
              onChange={changeDigitsNumber}
              sx={{
                  '& .MuiInputBase-root': {
                      borderRadius: '10px',
                      width: '300px',
                      marginBottom: '20px'
                  }
              }}/>
              <button onClick={handleSubmit} className={classes.btn_from}>Отправить</button>
            </form>
            {/* <h2>Enter a 6-digit number:</h2>
            <SixDigitInput digits={digits} onChange={handleDigitsChange} onSubmit={handleSubmit} />
            <p>Current number: {digits.join('')}</p> */}
        </div>
        </Box>
    </Modal>
  )
}

export default CheckDigits