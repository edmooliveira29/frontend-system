import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
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
	return (<>
		<SideBar />
		<props.Page />
	</>)
}

export const router = createBrowserRouter([
	{ path: '/', element: <Home /> },
	{ path: '/entrar', element: <Login /> },
	{ path: '/registrar', element: <Singin /> },
	{ path: '/preco', element: <PricePage /> },
	{ path: '/caracteristica', element: < FeaturesPage /> },
	{ path: '/sobre', element: < AboutPage /> },
	{ path: '/contato', element: < ContactUs /> },
	{ path: '/dashboard', element: < Internal Page={Dashboard} /> },
	{ path: '/relatorios', element: < Internal Page={Report} /> },
	{ path: '/configuracoes', element: < Internal Page={Setup} /> },
	{ path: '/clientes', element: < Internal Page={Customer} /> },
	{ path: '/produtos', element: < Internal Page={Products} /> },
	{ path: '/vendas', element: < Internal Page={Sale} /> },

])
