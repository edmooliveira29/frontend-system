import React, { useState } from 'react'
import { AiFillDashboard } from 'react-icons/ai'
import { HiDocumentReport } from 'react-icons/hi'
import { HiBars3 } from 'react-icons/hi2'
import { FaTimes } from 'react-icons/fa'
import { MdPointOfSale } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { BsFillPersonLinesFill, BsInboxesFill, BsFillGearFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'
import './styles.scss'


export const SideBar = (props: { showMenu: boolean, showSiderbar:any, closeSidebar:any  }) => {
	const navigate = useNavigate()

    const handleLogOut = () => {
        navigate('/entrar')
    }

    return (
        <><div className='row div-header'>
            <div className="col-10 p-0">
                {props.showMenu ? <div id='div-sideBar' className="d-flex flex-column flex-shrink-0 p-3 text-white" style={{ backgroundColor: '#1A202C', width: '280px', height: '100vh' }}>
                    <div className="row">
                        <div className='col-9'>
                            <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span className="fs-4">LOGO</span>
                            </a>
                        </div>
                        <div className='col-3' onClick={props.showSiderbar}>
                            <FaTimes onClick={props.closeSidebar} />
                        </div>

                    </div>

                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <Link to='/dashboard' > <AiFillDashboard size={30} style={{ margin: '0 10px' }} />Dashboard </Link><hr />
                        <Link to='/configuracoes'> <BsFillGearFill size={30} style={{ margin: '0 10px' }} />Configurações </Link><hr />
                        <Link to='/relatorios'> <HiDocumentReport size={30} style={{ margin: '0 10px' }} />Relatórios </Link><hr />
                        <Link to='/clientes'> <BsFillPersonLinesFill size={30} style={{ margin: '0 10px' }} />Clientes </Link><hr />
                        <Link to='/produtos'> <BsInboxesFill size={30} style={{ margin: '0 10px' }} />Produtos </Link><hr />
                        <Link to='/vendas'> <MdPointOfSale size={30} style={{ margin: '0 10px' }} />Venda </Link><hr />
                    </ul>
                    <hr />
                </div > : <HiBars3 className="icon-bar" onClick={props.showSiderbar} />}
            </div>
            <div className="col-2 ">
                <div className="dropdown justify-content-end">
                    <a href="#" className="d-flex align-items-center text-white dropdown-toggle p-2 justify-content-end align-items-center" id="img-user" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="42" height="42" className="rounded-circle me-2" />
                        <strong id='name-user-log'>Nome Sobrenome</strong>
                    </a>
                    <ul id='user-dropdown' className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="img-user">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" onClick={handleLogOut}>Sair</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </>

    )
}