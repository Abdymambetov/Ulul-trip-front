import React, { useState } from 'react'
import { Modal, Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { closeCheckDigitsModal } from '../../../../../store/slices/authSlice'
import SixDigitInput from './SixDigitInput';
import { chechDigitsAction } from '../../../../../store/slices/registerSlice';
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
    const chaageDigitsNumber = (e) => {
      setDigits(e.target.value)
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(chechDigitsAction(digits))
    }
  return (
    <Modal 
        open={checkDigitsModal}
        onClose = {() => dispatch(closeCheckDigitsModal())}
    >
        <Box sx={style}>
          <div>
            {/* <h2>Enter a 6-digit number:</h2>
            <SixDigitInput digits={digits} onChange={handleDigitsChange} onSubmit={handleSubmit} />
            <p>Current number: {digits.join('')}</p> */}
            <input type="text" onChange={chaageDigitsNumber}/>
            <button onClick={handleSubmit}>Отправить</button>
        </div>
        </Box>
    </Modal>
  )
}

export default CheckDigits