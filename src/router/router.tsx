import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { Home, PricePage, FeaturesPage, AboutPage, ContactUs } from '../pages/Website'
import {
  Dashboard, ListSale, MyAccount, Login, Singin, ListProduct,
  AddProducts, AddSale, ListCustomer, AddCustomer, AddUserSystem, ListUserSystem, AddCategory, ListCategory, AddEmployee, ListEmployee
} from '../pages/Internal'
import { SideBar } from '../components/sideBar/sideBar'
import NavBar from '../components/navBar/NavBar'
import Footer from '../components/footer/Footer'
import './styles.sass'
import { NotFound } from '../pages/NotFound'
import { userIsAlreadyLoggedIn } from '../utils'

const Internal = (props: { Page: any }) => {
  const [showMenu, setShowMenu] = useState(true)
  const showSiderbar = () => { setShowMenu(!showMenu) }

  const navigate = useNavigate()
  useEffect(() => {
    setShowMenu(window.innerWidth < 768 ? false : true)
    userIsAlreadyLoggedIn(navigate)
  }, [])

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
      <Route path="*" element={<Website Page={NotFound} />} />
      <Route path="/" element={<Website Page={Home} />} />
      <Route path="/entrar" element={<Website Page={Login} />} />
      <Route path="/registrar" element={<Singin />} />
      <Route path="/preco" element={<PricePage />} />
      <Route path="/caracteristica" element={<Website Page={FeaturesPage} />} />
      <Route path="/sobre" element={<AboutPage />} />
      <Route path="/contato" element={<ContactUs />} />
      <Route path="/dashboard" element={<Internal Page={Dashboard} />} />
      <Route path="/clientes" element={<Internal Page={ListCustomer} />} />
      <Route path="/categorias" element={<Internal Page={ListCategory} />} />
      <Route path="/categorias/adicionar" element={<Internal Page={AddCategory} />} />
      <Route path="/colaboradores" element={<Internal Page={ListEmployee} />} />
      <Route path="/colaboradores/adicionar" element={<Internal Page={AddEmployee} />} />
      <Route path="/clientes/adicionar" element={<Internal Page={AddCustomer} />} />
      <Route path="/produtos" element={<Internal Page={ListProduct} />} />
      <Route path="/produtos/adicionar" element={<Internal Page={AddProducts} />} />
      <Route path="/minha-conta" element={<Internal Page={MyAccount} />} />
      <Route path="/usuarios" element={<Internal Page={ListUserSystem} />} />
      <Route path="/usuarios/adicionar" element={<Internal Page={AddUserSystem} />} />
      <Route path="/vendas" element={<Internal Page={ListSale} />} />
      <Route path="/vendas/adicionar" element={<Internal Page={AddSale} />} />
    </Routes>
  </BrowserRouter>
)
