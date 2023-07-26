import React from 'react'
import { ComponentButtonCommon } from '../../../components/button/ComponentButtonCommon'
import { Link } from 'react-router-dom'

export const PremiumPlan = () => {
    return (
        <>
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
        </>
    )
}