import React, {Component} from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom';

const NavBar = () => (
	<div>
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<div className='container-fluid'>
				<Link to='/'>
					<a className='navbar-brand' >Logo</a>
				</Link>
				<button className='navbar-toggler collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#navbarColor01' aria-controls='navbarColor01' aria-expanded='false' aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='navbar-collapse collapse' id='navbarColor01'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<a className='nav-link active' aria-current='page' href='#'>Principal</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>Caracteristica</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>Preço</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>Sobre</a>
						</li>
					</ul>
					<form className='d-flex'>
						<input className='form-control me-2' type='search' placeholder='Pesquisar' aria-label='Search' />
						<button className='btn btn-outline-light' type='submit'>Pesquisar</button>
					</form>
					<Link to='entrar'>
						<AccountCircleIcon sx={{color: '#FFFFFF', margin: '0px 20px'}} fontSize='large' />
					</Link>
				</div>
			</div>
		</nav >
	</div >
);

export default NavBar;
