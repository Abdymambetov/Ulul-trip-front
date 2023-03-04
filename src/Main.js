import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/homePage/HomePage'
import Layouts from './layouts/Layouts'
import ProfilePage from './pages/profilePage/ProfilePage'
import LayoutsProfile from './layouts/LayoutsProfile'
import SearchPage from './pages/searchPage/SearchPage'
import FaqLayouts from './layouts/FaqLayouts'
import FAQPage from './pages/faqPage/FAQPage'

function Main() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layouts />}>
                    <Route index element={<HomePage />} />
                    <Route path="search" element={<SearchPage />} />
                </Route>
                <Route path="profile" element={<LayoutsProfile />}>
                    <Route index element={<ProfilePage />} />
                </Route>
                <Route path="faq" element={<FaqLayouts />}>
                    <Route index element={<FAQPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default Main
