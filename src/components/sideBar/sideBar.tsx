import React, { useEffect, useState } from 'react'
import { AiFillDashboard, AiOutlineUser } from 'react-icons/ai'
import { HiBars3 } from 'react-icons/hi2'
import { FaTimes } from 'react-icons/fa'
import { MdPointOfSale } from 'react-icons/md'
import { BsFillPersonLinesFill, BsInboxesFill } from 'react-icons/bs'
import { BiCategoryAlt } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import icon from '../../assets/img/icon.png'
import { AlertConfirmationLogout } from '../modal'
import './styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import { ActionsTypes } from '../../redux/actions/reducers'

export const Dropdown = (pictureProfile: string, username: string, handleLogOut: any, isAccessExternal?: boolean) => {
  return (<div className="col-3">
    <div className="dropdown justify-content-end">
      <a className="my-2 d-flex align-items-center text-white dropdown-toggle justify-content-end align-items-center" id="img-user" data-bs-toggle="dropdown" aria-expanded="false">
        {pictureProfile ?
          <img style={{ margin: '0 20px' }} src={pictureProfile} width="45" height="45" className="rounded-circle" alt='Imagem de perfil' /> :
          <AiOutlineUser size={60} color='white' style={{ margin: '0px 20px' }} />}
        {isAccessExternal ? null : <strong id='name-user-log'>{username}</strong>}
      </a>
      <ul id='user-dropdown' style={isAccessExternal ? { left: '-130px' } : { left: '100px' }} className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="img-user">
        <li>
          <Link id='my-account-dropdown' to='/minha-conta' className="dropdown-item" >
            Minha conta
          </Link>
        </li>
        <li>
          <Link id='user-register-dropdown' to='/usuario' className="dropdown-item" >
            Registrar usuário
          </Link>
        </li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" onClick={() => AlertConfirmationLogout(handleLogOut)}>Sair</a></li>
      </ul>
    </div>
  </div>)
}

export const SideBar = (props: { showMenu: boolean, showSiderbar: any, closeSidebar: any }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  let { currentUser } = useSelector((reducers: any) => reducers.userReducer)
  const user = JSON.parse(localStorage.getItem('userLogged') as any)
  currentUser = { ...currentUser, ...user }
  const [profilePicture, setUserProfile] = useState(currentUser?.profilePicture || '')
  const [username, setUsername] = useState(currentUser?.name || '')

  // const [showClientesSubmenu, setShowClientesSubmenu] = useState(false)
  // const toggleClientesSubmenu = () => {
  //   setShowClientesSubmenu(!showClientesSubmenu)
  // }

  useEffect(() => {
    setUsername(currentUser?.name)
    setUserProfile(currentUser?.profilePicture)
  }, [currentUser])
  const handleLogOut = () => {
    localStorage.clear()
    dispatch({ type: ActionsTypes.USER_LOGOUT })
    navigate('/entrar', { state: { route: 'logout' } })
  }

  return (
    <><div className='row div-header'>
      <div className="col-9 p-0">
        {props.showMenu ? <div id='div-sideBar' className="d-flex flex-column flex-shrink-0 px-2 py-0 text-white" style={{ backgroundColor: '#1A202C', width: '280px', height: '100vh', position: 'fixed' }}>
          <div className="row">
            <div className='col-9 px-1'>
              <Link to='/' >
                <img src={icon} width="60" height="60" className="rounded-circle" alt='Página inicial' />
              </Link>
            </div>
            <div className='col-3 p-3' onClick={props.showSiderbar} style={{ cursor: 'pointer' }}>
              <FaTimes />
            </div>

          </div>

          <hr />
          <ul className="nav flex-column mb-auto">
            <Link className='link-item-menu' to='/dashboard' onClick={props.showSiderbar} > <AiFillDashboard size={30} style={{ margin: '0 10px' }} />Dashboard </Link><hr />
            <Link className='link-item-menu' to='/categorias' onClick={props.showSiderbar}> <BiCategoryAlt size={30} style={{ margin: '0 10px' }} />Categorias </Link><hr />
            <Link className='link-item-menu' to='/clientes' onClick={props.showSiderbar}> <BsFillPersonLinesFill size={30} style={{ margin: '0 10px' }} />Clientes </Link><hr />
            {/* <li className="nav-item" onClick={toggleClientesSubmenu}>
              <BsFillPersonLinesFill size={30} style={{ margin: '0 10px' }} />Clientes
              {showClientesSubmenu ? <MdOutlineArrowDropUp size={30} id='icon-arrow' />
                : < MdOutlineArrowDropDown size={30} id='icon-arrow' />}
              {showClientesSubmenu && (
                <ul className="nav flex-column mb-auto sub-menu">
                  <Link className='link-sub-item-menu' onClick={props.showSiderbar} to='/clientes/juridico'>Jurídico</Link>
                  <Link className='link-sub-item-menu' onClick={props.showSiderbar} to='/clientes/fisico'>Físico</Link>
                </ul>
              )}
            </li><hr /> */}
            <Link className='link-item-menu' onClick={props.showSiderbar} to='/produtos'> <BsInboxesFill size={30} style={{ margin: '0 10px' }} />Produtos </Link><hr />
            <Link className='link-item-menu' onClick={props.showSiderbar} to='/vendas'> <MdPointOfSale size={30} style={{ margin: '0 10px' }} />Venda </Link><hr />
          </ul>
          <hr />
        </div > :
          <div onClick={props.showSiderbar} id="div-icon-bar" >
            <img src={icon} width="60" height="60" className="rounded-circle" alt='Logo' />
            <HiBars3 className="icon-bar" />
          </div>
        }
      </div>
      {Dropdown(profilePicture, username, handleLogOut)}
    </div>
    </>
  )
}