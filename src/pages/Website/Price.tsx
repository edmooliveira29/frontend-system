import React, { Component } from 'react'
import NavBar from '../../components/navBar/NavBar'
import Footer from '../../components/footer/Footer'
import './styles.sass'
import { ComponentButtonCommon } from '../../components/button/ComponentButtonCommon'
import { Link } from 'react-router-dom'

export const PricePage = () => (
	<>
		<NavBar />
		<div className="container">
			<div className="row m-5">
				<h2 className='text-center p-5'>
					Invista na <span className='text-success'> melhor plataforma </span> para seu negócio!
				</h2>
				<div className="col-12 col-md-6 col-lg-3 mb-4">
					<div className="card fixed-height">
						<div className="card-header text-center">
							<h5 className="card-title">GRÁTIS</h5>
							<p className="text-muted">Valor: R$XX,XX/mês</p>
						</div>
						<div className="card-body">
							<ul className="list-group list-group-flush">
								<li className="list-group-item">1 usuário</li>
								<li className="list-group-item">Cadastro de clientes*</li>
								<li className="list-group-item">Cadastro de produtos*</li>
								<li className="list-group-item">Gestão de estoques*</li>
								<li className="list-group-item">Suporte por email</li>
							</ul>
						</div>
						<Link to='/registrar'>
							<div className="card-footer text-center">
								<ComponentButtonCommon text='CADASTRAR' />
							</div>
						</Link>
					</div>
				</div>
				<div className="col-12 col-md-6 col-lg-3 mb-4">
					<div className="card fixed-height">
						<div className="card-header text-center">
							<h5 className="card-title">PADRÃO</h5>
							<p className="text-muted">Valor: R$XX,XX/mês</p>
						</div>
						<div className="card-body">
							<ul className="list-group list-group-flush">
								<li className="list-group-item">5 usuário</li>
								<li className="list-group-item">Cadastro de clientes</li>
								<li className="list-group-item">Cadastro de produtos</li>
								<li className="list-group-item">Gestão de estoques</li>
								<li className="list-group-item">Suporte Segunda a Sexta</li>
							</ul>
						</div>
						<Link to='/registrar'>
							<div className="card-footer text-center">
								<ComponentButtonCommon text='Comprar' />
							</div>
						</Link>
					</div>
				</div>
				<div className="col-12 col-md-6 col-lg-3">
					<div className="card fixed-height more-used">
						<div className="card-header bg-secondary text-white text-center">
							<div className='row'>
								<div className='col-9'>
									<h5 className="card-title popular-name">PREMIUM</h5>
								</div>
								<div className='col-3 p-0'>
									<h6 className="card-title popular-text">Popular</h6>
								</div>
							</div>
							<p className="text-white">Valor: R$XX,XX/mês</p>
						</div>
						<div className="card-body">
							<ul className="list-group list-group-flush">
								<li className="list-group-item">10 usuário</li>
								<li className="list-group-item">Cadastro de clientes</li>
								<li className="list-group-item">Cadastro de produtos</li>
								<li className="list-group-item">Gestão de estoques</li>
								<li className="list-group-item">Relatórios</li>
								<li className="list-group-item">Suporte Segunda a Sexta</li>
							</ul>
						</div>
						<Link to='/registrar'>
							<div className="card-footer text-center">
								<ComponentButtonCommon text='Comprar' />
							</div>
						</Link>
					</div>
				</div>
				<div className="col-12 col-md-6 col-lg-3 mb-4">
					<div className="card fixed-height">
						<div className="card-header text-center">
							<h5 className="card-title">ENTERPRISE</h5>
							<p className="text-muted">Valor: R$XX,XX/mês</p>

						</div>
						<div className="card-body">
							<ul className="list-group list-group-flush">
								<li className="list-group-item">Usuário ilimitado</li>
								<li className="list-group-item">Cadastro de clientes</li>
								<li className="list-group-item">Cadastro de produtos</li>
								<li className="list-group-item">Gestão de estoques</li>
								<li className="list-group-item">Impressão de etiqueta</li>
								<li className="list-group-item">Emissão de Boletos</li>
								<li className="list-group-item">Relatórios</li>
								<li className="list-group-item">Suporte 24/7</li>
							</ul>
						</div>
						<Link to='/registrar'>
							<div className="card-footer text-center">
								<ComponentButtonCommon text='Comprar' />
							</div>
						</Link>
					</div>
				</div>
			</div>
			<div>
				<h6 style={{ fontSize: '10px' }}>
					* Cadastro de no máximo 10 clientes, produtos ou estoques.
				</h6>
			</div>
		</div>
		<Footer />
	</>

)
