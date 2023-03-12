import React, { memo } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

function Layouts() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default memo(Layouts)
