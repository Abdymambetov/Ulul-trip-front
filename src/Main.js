import React from 'react'

import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/homePage/HomePage'
import Layouts from './layouts/Layouts'
import ProfilePage from './pages/profilePage/ProfilePage'
import LayoutsProfile from './layouts/LayoutsProfile'


function Main() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layouts/>}>
          <Route index  element={<HomePage/>}/>
        </Route>
        <Route path='/profile' element={<LayoutsProfile/>}>
          <Route index element={<ProfilePage/>}/>
        </Route>
      </Routes>
    </>
    
  )
}

export default Main