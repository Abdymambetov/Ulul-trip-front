import React from 'react'
import GoogleProfilePage from './googleProfile/GoogleProfilePage'
import JustProfilePage from './justProfilePage/JustProfilePage'
import classes from './ProfilePage.module.css'

function ProfilePage() {
  return (
    <div>
      <JustProfilePage/>
      {/* <GoogleProfilePage/> */}
    </div>
  )
}

export default ProfilePage