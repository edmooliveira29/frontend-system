import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Link, useNavigate } from 'react-router-dom'
import './styles.scss'
import { ComponentButtonCommon } from '../button/ComponentButtonCommon'
import icon from '../../assets/img/icon.png'
import { Dropdown } from '../sideBar'
import { ActionsTypes } from '../../redux/actions/reducers'
import { useDispatch, useSelector } from 'react-redux'

export const NavBar = () => {
  let userLogged = JSON.parse(localStorage.getItem('userLogged') as any)
  const { currentUser } = useSelector((reducers: any) => reducers.userReducer)
  userLogged = { ...userLogged, ...currentUser }
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogOut = () => {
    localStorage.clear()
    dispatch({ type: ActionsTypes.USER_LOGOUT })
    navigate('/entrar', { state: { route: 'logout' } })
  }
  return (<>
    <div id="navbar" style={{ marginBottom: '75px' }}>

      <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
        <div className='container-fluid'>
          <Link to='/' >
            <img src={icon} width="60" height="60" className="rounded-circle" alt='Logo' />
          </Link>
          <button className='navbar-toggler collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#navbarColor01' aria-controls='navbarColor01' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='navbar-collapse collapse' id='navbarColor01'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <Link to='/' className='link-navbar'>
                Início
              </Link>
              <Link to='/caracteristica' className='link-navbar'>
                Caracteristica
              </Link>
              <Link to='/preco' className='link-navbar'>
                Preço
              </Link>
              <Link to='/sobre' className='link-navbar'>
                Sobre
              </Link>
              <Link to='/contato' className='link-navbar'>
                Contato
              </Link>
            </ul>


            <form className='d-flex align-items-center'>
              <input id="input-search" className='form-control m-0' type='search' placeholder='Pesquisar' aria-label='Search' />
              <ComponentButtonCommon text='Pesquisar' sizeHeight='50px' sizeWidth='180px' id='search' />
              {userLogged.name ? Dropdown(userLogged.profilePicture, userLogged.name, handleLogOut, true) :
                <Link to='/entrar' title={userLogged !== null ? 'Usuário logado' : 'Entrar'} className='link-navbar' id="link-login">
                  <AccountCircleIcon className='mx-auto' sx={{ color: '#FFFFFF' }} fontSize='large' />
                </Link>}
            </form>
          </div>
        </div>
      </nav >

    </div></>
  )
}

export default NavBar
