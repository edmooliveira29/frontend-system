import React from 'react'
import { ComponentButtonCommon } from '../../../components/button/ComponentButtonCommon'
import { Link } from 'react-router-dom'

export const DefaultPlan = () => {
  return (
    <>
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
              <ComponentButtonCommon text='Comprar' id='default-plan'/>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}