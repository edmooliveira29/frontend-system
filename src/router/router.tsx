import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { Login, Singin } from '../pages/Internal/User'
import { Home, PricePage, FeaturesPage, AboutPage } from '../pages/Website'
import { ContactUs } from '../pages/Website/Contact'
import { Dashboard } from '../pages/Internal/Dashboard/Dashboard'
import { Customer } from '../pages/Internal/Customer/Customer'
import { Products } from '../pages/Internal/Products/Products'
import { Sale } from '../pages/Internal/Sale/Products'
import { SideBar } from '../components/sideBar/sideBar'
import { Report } from '../pages/Internal/Report/Report'
import jwtDecode, { JwtPayload } from 'jwt-decode'
import { AlertWarningGeneral } from '../components/modal'
import NavBar from '../components/navBar/NavBar'
import Footer from '../components/footer/Footer'
import { MyAccount } from '../pages/Internal/MyAccount/MyAccount'
import './styles.sass'
const Internal = (props: { Page: any }) => {
  const [showMenu, setShowMenu] = useState(true)
  const showSiderbar = () => setShowMenu(!showMenu)
  const navigate = useNavigate()

  useEffect(() => {
    userIsAlreadyLoggedIn()
  }, [])

  const userIsAlreadyLoggedIn = () => {
    sessionTokenExpiry(String(localStorage.getItem('sessionToken')))
  }
  const sessionTokenExpiry = (sessionToken: string) => {
    const decoded = jwtDecode(sessionToken) as JwtPayload
    const expirationTime = decoded.exp || 0
    const currentTime = Math.floor(Date.now() / 1000)
    if (currentTime > expirationTime) {
      AlertWarningGeneral('Sua sessão expirou. Por favor entre novamente')
      localStorage.clear()
      navigate('/entrar')
    }
  }
  const closeSidebar = () => setShowMenu(true)
  const stylesContainer = showMenu ? { marginRight: '280px'} : { marginRight: '0px'}
  
  return (<>
    <SideBar showMenu={showMenu} closeSidebar={closeSidebar} showSiderbar={showSiderbar} />
    <div className={showMenu ? 'contents' : ''} style={{ marginLeft: stylesContainer.marginRight }}>
      <props.Page />
    </div>
  </>)
}



const Website = (props: { Page: any }) => {

  return (
    <>
      <NavBar />
      <props.Page />
      <Footer />
    </>
  )
}

export const router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Website Page={Home} />} />
      <Route path="/entrar" element={<Login />} />
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