import React, { useEffect } from 'react'

import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/homePage/HomePage'
import Layouts from './layouts/Layouts'
import ProfilePage from './pages/profilePage/ProfilePage'
import LayoutsProfile from './layouts/LayoutsProfile'
import { useDispatch, useSelector } from 'react-redux'
import { getBigerCursor } from './store/slices/preloaderSlice'

function Main() {
    const { cursor } = useSelector(state => state.loading)
    useEffect(() => {
        const cursor = document.querySelector('.custom-cursor')
        const circle = document.querySelector('.cursor-circle')

        document.addEventListener('mousemove', e => {
            const x = e.clientX
            const y = e.clientY
            const circleX = x - 20
            const circleY = y - 20

            circle.style.transform = `translate3d(${circleX}px, ${circleY}px, 0)`
            cursor.style.transform = `translate3d(${circleX}px, ${circleY}px, 0)`
        })

        function addMoveClass(e) {
            circle.classList.add('move')
        }

        function removeMoveClass() {
            circle.classList.remove('move')
        }

        setTimeout(() => {
            circle.classList.add('show')
        }, 1000)

        document.addEventListener('mouseenter', addMoveClass)
        document.addEventListener('mouseleave', removeMoveClass)

        return () => {
            document.removeEventListener('mouseenter', addMoveClass)
            document.addEventListener('mouseleave', removeMoveClass)
            document.removeEventListener('mousemove')
        }
    }, [])

    return (
        <>
            <Routes>
                <Route path="/" element={<Layouts />}>
                    <Route index element={<HomePage />} />
                </Route>
                <Route path="/profile" element={<LayoutsProfile />}>
                    <Route index element={<ProfilePage />} />
                </Route>
            </Routes>
            <div className="custom-cursor"></div>
            <div className={`cursor-circle ${cursor}`}></div>
        </>
    )
}

export default Main
