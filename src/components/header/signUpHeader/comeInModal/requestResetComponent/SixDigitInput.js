import React from 'react'

function SixDigitInput({ digits, onChange, onSubmit }) {
    const handleDigitChange = (index, value) => {
      const newDigits = [...digits];
      newDigits[index] = value;
      onChange(newDigits);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const number = parseInt(digits.join(''));
      onSubmit(number);
      
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={digits[0]} onChange={(e) => handleDigitChange(0, e.target.value.replace(/\D/, ''))} maxLength="1" />
        <input type="text" value={digits[1]} onChange={(e) => handleDigitChange(1, e.target.value.replace(/\D/, ''))} maxLength="1" />
        <input type="text" value={digits[2]} onChange={(e) => handleDigitChange(2, e.target.value.replace(/\D/, ''))} maxLength="1" />
        <input type="text" value={digits[3]} onChange={(e) => handleDigitChange(3, e.target.value.replace(/\D/, ''))} maxLength="1" />
        <input type="text" value={digits[4]} onChange={(e) => handleDigitChange(4, e.target.value.replace(/\D/, ''))} maxLength="1" />
        <input type="text" value={digits[5]} onChange={(e) => handleDigitChange(5, e.target.value.replace(/\D/, ''))} maxLength="1" />
        <button type="submit">Submit</button>
      </form>
    );
  }

export default SixDigitInput