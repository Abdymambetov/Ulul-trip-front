import React from 'react'

import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage'
import MenuPage from './pages/menu/MenuPage'

function Main() {
  return (
    <>
      <MenuPage/>
      <Routes>
        <Route index element={<HomePage/>}/>
      </Routes>
    </>
    
  )
}

export default Main