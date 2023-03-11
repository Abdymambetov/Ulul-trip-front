import React from 'react'
import { useSelector } from 'react-redux'
import JustHeader from './justHeader/JustHeader'
import SignUpHeader from './signUpHeader/SignUpHeader'

function Header() {
    const {logIn} = useSelector(state => state.regis)
    return (
        <>
            {
                logIn
                ?
                <JustHeader/>
                :
                <SignUpHeader/>
            }
            {/* <SignUpHeader/>   
            <JustHeader /> */}
        </>
    )
}

export default Header
