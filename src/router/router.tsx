import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { Home, PricePage, FeaturesPage, AboutPage, ContactUs } from '../pages/Website'
import { Dashboard, Customer, Products, Sale, MyAccount, Report, Login, Singin } from '../pages/Internal'
import { SideBar } from '../components/sideBar/sideBar'
import jwtDecode, { JwtPayload } from 'jwt-decode'
import { AlertGeneral, } from '../components/modal'
import NavBar from '../components/navBar/NavBar'
import Footer from '../components/footer/Footer'
import './styles.sass'

const Internal = (props: { Page: any }) => {
  const [showMenu, setShowMenu] = useState(true)
  const showSiderbar = () => setShowMenu(!showMenu)
  const navigate = useNavigate()
  useEffect(() => {
    userIsAlreadyLoggedIn(navigate)
  },[])

  const closeSidebar = () => setShowMenu(true)
  const stylesContainer = showMenu ? { marginRight: '280px' } : { marginRight: '0px' }

  return (<>
    <SideBar showMenu={showMenu} closeSidebar={closeSidebar} showSiderbar={showSiderbar} />
    <div className={showMenu ? 'contents' : ''} style={{ marginLeft: stylesContainer.marginRight }}>
      <props.Page />
    </div>
  </>)
}

const Website = (props: { Page: any }) => {
  const navigate = useNavigate()
  useEffect(() => {
    if (props.Page.name == 'Login') {
      userIsAlreadyLoggedIn(navigate, '/dashboard')
    }
  }, [])


  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <NavBar />
        <div style={{ flexGrow: 1 }}>
          <props.Page />
        </div>
        <Footer />
      </div>
    </>
  )
}

export const router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Website Page={Home} />} />
      <Route path="/entrar" element={<Website Page={Login} />} />
      <Route path="/registrar" element={<Singin />} />
      <Route path="/preco" element={<PricePage />} />
      <Route path="/caracteristica" element={<Website Page={FeaturesPage} />} />
      <Route path="/sobre" element={<AboutPage />} />
      <Route path="/contato" element={<ContactUs />} />
      <Route path="/dashboard" element={<Internal Page={Dashboard} />} />
      <Route path="/relatorios" element={<Internal Page={Report} />} />
      <Route path="/clientes/fisico" element={<Internal Page={Customer} />} />
      <Route path="/clientes/juridico" element={<Internal Page={Customer} />} />
      <Route path="/produtos" element={<Internal Page={Products} />} />
      <Route path="/minha-conta" element={<Internal Page={MyAccount} />} />
      <Route path="/vendas" element={<Internal Page={Sale} />} />
    </Routes>
  </BrowserRouter>
)

const userIsAlreadyLoggedIn = (navigate: any, route?: string) => {
  if (localStorage.getItem('sessionToken') !== null) {
    sessionTokenExpiry(String(localStorage.getItem('sessionToken')), navigate, route)
  } else {
    AlertGeneral({ message: 'Sua sessão expirou. Por favor entre novamente', type: 'warning' })
    navigate('/entrar')
  }
}
const sessionTokenExpiry = (sessionToken: string, navigate: any, route?: string) => {
  const decoded = jwtDecode(sessionToken) as JwtPayload
  const expirationTime = decoded.exp || 0
  const currentTime = Math.floor(Date.now() / 1000)
  if (currentTime > expirationTime) {
    AlertGeneral({ message: 'Sua sessão expirou. Por favor entre novamente', type: 'warning' })
    localStorage.clear()
    navigate('/entrar')
  } else if (route) {
    navigate(route)
  }
}