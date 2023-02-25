import React from 'react'

import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/homePage/HomePage'
import Layouts from './layouts/Layouts'


function Main() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layouts/>}>
          <Route index  element={<HomePage/>}/>
        </Route>
      </Routes>
    </>
    
  )
}

export default Main