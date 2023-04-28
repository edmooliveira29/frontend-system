import React, {Component} from 'react';
import {Facebook, Twitter, Instagram} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import './styles.sass';
import {ComponentButtonCommon} from '../button/ComponentButtonCommon';
import {TextFieldInput} from '../inputs/TextFieldInput';
const Footer = () => (
	<>
		<div className='bg-secondary'>
			< div className='container ' >
				<footer className='m-0 p-3'>
					<div className='row'>
						<div className='col-6 mb-6'>
							<h5 className='link-icon-website'>Sessões</h5>
							<ul className='nav flex-column'>
								<Link to='/' className='link-icon-website'>Início</Link>
								<Link to='/caracteristica' className='link-icon-website'>Característica</Link>
								<Link to='/preco' className='link-icon-website'>Preço</Link>
								<Link to='/sobre' className='link-icon-website'>Sobre</Link>

							</ul>
						</div>

						<div className='col-6 mb-6'>
							<form>
								<h5 className='link-icon-website'>Se inscreva para receber notícias</h5>
								<p className='link-icon-website'>Resumo mensal do que há de novo e empolgante de nós.</p>
								<div className='d-flex flex-column flex-sm-row w-100 gap-2'>
									<label htmlFor='newsletter1' className='visually-hidden'>Email</label>
									<TextFieldInput label='E-mail' typeInput='text' />
									<ComponentButtonCommon text='Inscrever-se' width='180px' />
								</div>
							</form>
						</div>
					</div>

					<div className='link-icon-website d-flex flex-column flex-sm-row justify-content-between py-4 border-top'>
						<p>© 2023 Empresa. Todos os direitos reservados</p>
						<ul className='list-unstyled d-flex'>
							<a className='link-icon-social-media' href='http://www.instagram.com'><Instagram /></a>
							<a className='link-icon-social-media' href='https://www.facebook.com'><Facebook /></a>
							<a className='link-icon-social-media' href='https://www.twitter.com'><Twitter to='www.twitter.com' /></a>
							<li className='ms-3'><a className='link-dark' href='www.twitter.com'><svg className='bi' width='24' height='24'><use xlinkHref='#twitter'></use></svg></a></li>
							<li className='ms-3'><a className='link-dark' href='www.facebook.com'><svg className='bi' width='24' height='24'><use xlinkHref='#facebook'></use></svg></a></li>
						</ul>
					</div>
				</footer>
			</div >
		</div >

	</>);

export default Footer;
