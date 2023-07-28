import React, { useState } from 'react'
import { AiFillDashboard } from 'react-icons/ai'
import { HiDocumentReport } from 'react-icons/hi'
import { HiBars3 } from 'react-icons/hi2'
import { FaTimes } from 'react-icons/fa'
import { MdPointOfSale, MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { BsFillPersonLinesFill, BsInboxesFill } from 'react-icons/bs'
import icon from '../../assets/img/icon.png'
import './styles.scss'
import { AlertConfirmationLogout } from '../modal'


export const SideBar = (props: { showMenu: boolean, showSiderbar: any, closeSidebar: any }) => {
  const navigate = useNavigate()
  const userName = localStorage.getItem('username')
  const [pictureProfile] = useState(localStorage.getItem('picture_profile'))
  const [showClientesSubmenu, setShowClientesSubmenu] = useState(false)

  const toggleClientesSubmenu = () => {
    setShowClientesSubmenu(!showClientesSubmenu)
  }

  const handleLogOut = () => {
    localStorage.clear()
    navigate('/entrar')
  }

  return (
    <><div className='row div-header'>
      <div className="col-10 p-0">
        {props.showMenu ? <div id='div-sideBar' className="d-flex flex-column flex-shrink-0 px-2 py-0 text-white" style={{ backgroundColor: '#1A202C', width: '280px', height: '100vh' }}>
          <div className="row">
            <div className='col-9 px-1'>
              <img src={icon} width="60" height="60" className="rounded-circle" />
            </div>
            <div className='col-3 p-3' onClick={props.showSiderbar} style={{ cursor: 'pointer' }}>
              <FaTimes onClick={props.closeSidebar} />
            </div>

          </div>

          <hr />
          <ul className="nav flex-column mb-auto">
            <Link className='link-item-menu' to='/dashboard' > <AiFillDashboard size={30} style={{ margin: '0 10px' }} />Dashboard </Link><hr />
            <Link className='link-item-menu' to='/relatorios'> <HiDocumentReport size={30} style={{ margin: '0 10px' }} />Relatórios </Link><hr />
            <li className="nav-item" onClick={toggleClientesSubmenu}>
              <BsFillPersonLinesFill size={30} style={{ margin: '0 10px' }} />Clientes
              {showClientesSubmenu ? <MdOutlineArrowDropUp size={30} id='icon-arrow' />
                : < MdOutlineArrowDropDown size={30} id='icon-arrow' />}
              {showClientesSubmenu && (
                <ul className="nav flex-column mb-auto sub-menu">
                  <Link className='link-sub-item-menu' to='/clientes/juridico'>Jurídico</Link>
                  <Link className='link-sub-item-menu' to='/clientes/fisico'>Físico</Link>
                </ul>
              )}
            </li><hr />
            <Link className='link-item-menu' to='/produtos'> <BsInboxesFill size={30} style={{ margin: '0 10px' }} />Produtos </Link><hr />
            <Link className='link-item-menu' to='/vendas'> <MdPointOfSale size={30} style={{ margin: '0 10px' }} />Venda </Link><hr />
          </ul>
          <hr />
        </div > :
          <div onClick={props.showSiderbar} id="div-icon-bar" >
            <img src={icon} width="60" height="60" className="rounded-circle" />
            <HiBars3 className="icon-bar" />
          </div>
        }
      </div>
      <div className="col-2">
        <div className="dropdown justify-content-end">
          <a className="d-flex align-items-center text-white dropdown-toggle p-2 justify-content-end align-items-center" id="img-user" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={pictureProfile || "https://github.com/mdo.png"} width="42" height="42" className="rounded-circle me-2" />
            <strong id='name-user-log'>{userName}</strong>
          </a>
          <ul id='user-dropdown' className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="img-user">
            <li>
              <Link to='/minha-conta' className="dropdown-item" >
                Minha conta
              </Link>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" onClick={() => AlertConfirmationLogout(handleLogOut)}>Sair</a></li>
          </ul>
        </div>
      </div>
    </div>
    </>

  )
}