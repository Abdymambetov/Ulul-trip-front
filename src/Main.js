import { Route, Routes } from 'react-router-dom'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Cursor from './components/cursor/Cursor'
import FaqLayouts from './layouts/FaqLayouts'
import Layouts from './layouts/Layouts'
import LayoutsProfile from './layouts/LayoutsProfile'
import AboutUsPage from './pages/aboutUs/AboutUsPage'
import FAQPage from './pages/faqPage/FAQPage'
import HomePage from './pages/homePage/HomePage'
import ProfilePage from './pages/profilePage/ProfilePage'
import SearchPage from './pages/searchPage/SearchPage'
import { fetchUser } from './store/slices/registerSlice'

function Main() {
	const dispatch = useDispatch()

	useEffect(() => {
		const userTokens = JSON.parse(localStorage.getItem('user'))
		const accessToken = userTokens?.access
		const refreshToken = userTokens?.refresh
		if (accessToken) {
			dispatch(fetchUser())
		}
	}, [dispatch])

	return (
		<>
			<Routes>
				<Route path='/' element={<Layouts />}>
					<Route index element={<HomePage />} />
					<Route path='search' element={<SearchPage />} />
					<Route path='aboutUs' element={<AboutUsPage />} />
				</Route>
				<Route path='profile' element={<LayoutsProfile />}>
					<Route index element={<ProfilePage />} />
				</Route>
				<Route path='faq' element={<FaqLayouts />}>
					<Route index element={<FAQPage />} />
				</Route>
			</Routes>
			<Cursor />
		</>
	)
}

export default Main
