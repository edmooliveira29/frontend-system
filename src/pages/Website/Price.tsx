import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import Footer from '../../components/footer/Footer'
import './styles.sass'
import { FreePlan, DefaultPlan, PremiumPlan, VipPlan} from './Pricing'

export const PricePage = () => (
	<>
		<NavBar />
		<div className="container">
			<div className="row m-5">
				<h2 className='text-center p-5'>
					Invista na <span className='text-success'> melhor plataforma </span> para seu negócio!
				</h2>
				<FreePlan />
				<DefaultPlan />
				<PremiumPlan />
				<VipPlan />
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
