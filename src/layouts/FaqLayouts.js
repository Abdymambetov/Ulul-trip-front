import React from 'react'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import FAQHeader from '../components/header/faqHeader/FAQHeader'

function FaqLayouts() {
  return (
    <div>
        <FAQHeader/>
            <Outlet/>
        <Footer/>
    </div>
  )
}

export default FaqLayouts