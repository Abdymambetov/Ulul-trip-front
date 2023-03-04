import React from 'react'
import classes from './Header.module.css';
import JustHeader from './justHeader/JustHeader';
import SignUpHeader from './signUpHeader/SignUpHeader';

function Header() {
 
  return (
    <>
      {/* <SignUpHeader/>    */}
      <JustHeader/>
    </>
  )
}

export default Header