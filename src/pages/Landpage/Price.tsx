import React, {Component} from 'react';
import NavBar from '../../components/navBar/NavBar';
import CheckIcon from '@mui/icons-material/Check';
import Footer from '../../components/footer/Footer';
import {Link} from 'react-router-dom';
export const PricePage = () => (
	<>
		<NavBar />
		<div className='container'>
			<div className='pricing-header p-3 pb-md-4 mx-auto text-center'>
				<h1 className='display-4 fw-normal'>Preços</h1>
				<p className='fs-5 text-muted'>Bem-vindo à nossa tabela de preços! Aqui você encontrará informações sobre os nossos produtos e serviços e os respectivos valores. Temos opções para todos os gostos e necessidades, desde os mais simples até os mais complexos. Acreditamos que a transparência nos preços é fundamental para uma relação de confiança com os nossos clientes. Confira abaixo as nossas opções e sinta-se à vontade para entrar em contato caso precise de mais informações ou esclarecimentos. Estamos sempre à disposição para atendê-lo da melhor forma possível.</p>
			</div>
			<div className='row row-cols-1 row-cols-md-3 mb-3 text-center'>
				<div className='col'>
					<div className='card mb-4 rounded-3 shadow-sm'>
						<div className='card-header py-3'>
							<h4 className='my-0 fw-normal'>Grátis</h4>
						</div>
						<div className='card-body'>
							<h1 className='card-title pricing-card-title'>R$0,00<small className='text-muted fw-light'>/mês</small></h1>
							<ul className='list-unstyled mt-3 mb-4'>
								<li>1 usuário</li>
								<li>1 GB de armazenamento</li>

							</ul>
							<Link to='/registrar'>
								<button type='button' className='w-100 btn btn-lg btn-outline-primary'>Cadastre agora</button>
							</Link>
						</div>
					</div>
				</div>
				<div className='col'>
					<div className='card mb-4 rounded-3 shadow-sm'>
						<div className='card-header py-3'>
							<h4 className='my-0 fw-normal'>Prata</h4>
						</div>
						<div className='card-body'>
							<h1 className='card-title pricing-card-title'>R$xx,xx<small className='text-muted fw-light'>/mês</small></h1>
							<ul className='list-unstyled mt-3 mb-4'>
								<li>2 usuário</li>
								<li>1 GB de armazenamento</li>
							</ul>
							<Link to='/registrar'>
								<button type='button' className='w-100 btn btn-lg btn-primary'>Cadastre-se agora</button>
							</Link>
						</div>
					</div>
				</div>
				<div className='col'>
					<div className='card mb-4 rounded-3 shadow-sm border-primary'>
						<div className='card-header py-3 text-white bg-primary border-primary'>
							<h4 className='my-0 fw-normal'>Enterprise</h4>
						</div>
						<div className='card-body'>
							<h1 className='card-title pricing-card-title'>R$xx,xx<small className='text-muted fw-light'>/mês</small></h1>
							<ul className='list-unstyled mt-3 mb-4'>
								<li>5 usuário</li>
								<li>5 GB de armazenamento</li>
							</ul>
							<Link to='/registrar'>
								<button type='button' className='w-100 btn btn-lg btn-primary'>Entre em contato</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<h2 className='display-6 text-center mb-4'>Compare os planos</h2>
			<div className='table-responsive'>
				<table className='table text-center'>
					<thead>
						<tr>
							<th style={{width: '34%'}}></th>
							<th style={{width: '22%'}}>Grátis</th>
							<th style={{width: '22%'}}>Prata</th>
							<th style={{width: '22%'}}>Ouro</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope='row' className='text-start'>Caracteristica 1</th>
							<td><CheckIcon /></td>
							<td><CheckIcon /></td>
							<td><CheckIcon /></td>
						</tr>
						<tr>
							<th scope='row' className='text-start'>Caracteristica 2</th>
							<td></td>
							<td><CheckIcon /></td>
							<td><CheckIcon /></td>
						</tr>
					</tbody>

					<tbody>
						<tr>
							<th scope='row' className='text-start'>Caracteristica 3</th>
							<td><CheckIcon /></td>
							<td><CheckIcon /></td>
							<td><CheckIcon /></td>
						</tr>
						<tr>
							<th scope='row' className='text-start'>Caracteristica 4</th>
							<td></td>
							<td><CheckIcon /></td>
							<td><CheckIcon /></td>
						</tr>
						<tr>
							<th scope='row' className='text-start'>Caracteristica 5</th>
							<td></td>
							<td><CheckIcon /></td>
							<td><CheckIcon /></td>
						</tr>
						<tr>
							<th scope='row' className='text-start'>Caracteristica 6</th>
							<td></td>
							<td></td>
							<td><CheckIcon /></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<Footer />
	</>

);
