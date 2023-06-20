import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { Login, Singin } from '../pages/Internal/User'
import { Home, PricePage, FeaturesPage, AboutPage } from '../pages/Website'
import { ContactUs } from '../pages/Website/Contact'
import { Dashboard } from '../pages/Internal/Dashboard/Dashboard'
import { Setup } from '../pages/Internal/Setup/Setup'
import { Customer } from '../pages/Internal/Customer/Customer'
import { Products } from '../pages/Internal/Products/Products'
import { Sale } from '../pages/Internal/Sale/Products'
import { SideBar } from '../components/sideBar/sideBar'
import { Report } from '../pages/Internal/Report/Report'

const Internal = (props: { Page: any }) => {
	const [showMenu, setShowMenu] = useState(true)
	const showSiderbar = () => setShowMenu(!showMenu)
	const navigate = useNavigate()

	useEffect(() => {
		userIsAlreadyLoggedIn()
	})

	const userIsAlreadyLoggedIn = () => {
		console.log(localStorage.getItem('sessionId'))
		if (!localStorage.getItem('sessionId')) {
			navigate('/entrar')
		}
	}

	const closeSidebar = () => setShowMenu(false)
	return (<>
		<SideBar showMenu={showMenu} closeSidebar={closeSidebar} showSiderbar={showSiderbar} />
		<div style={{ marginLeft: showMenu ? '280px' : '0px' }}>
			<props.Page />
		</div>
	</>)
}


export const router = (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/entrar" element={<Login />} />
			<Route path="/registrar" element={<Singin />} />
			<Route path="/preco" element={<PricePage />} />
			<Route path="/caracteristica" element={<FeaturesPage />} />
			<Route path="/sobre" element={<AboutPage />} />
			<Route path="/contato" element={<ContactUs />} />
			<Route path="/dashboard" element={<Internal Page={Dashboard} />} />
			<Route path="/relatorios" element={<Internal Page={Report} />} />
			<Route path="/configuracoes" element={<Internal Page={Setup} />} />
			<Route path="/clientes" element={<Internal Page={Customer} />} />
			<Route path="/produtos" element={<Internal Page={Products} />} />
			<Route path="/vendas" element={<Internal Page={Sale} />} />
		</Routes>
	</BrowserRouter>
)