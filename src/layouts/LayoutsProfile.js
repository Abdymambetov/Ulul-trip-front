import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import ProfileHeader from '../components/header/profileHeader/ProfileHeader'

function LayoutsProfile() {
  return (
    <div>
        <ProfileHeader/>
            <Outlet/>
        <Footer/>
    </div>
  )
}

export default LayoutsProfile