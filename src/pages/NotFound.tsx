import React from 'react'
import { ComponentButtonCommon } from '../components'
import { Link } from 'react-router-dom'

export const NotFound = () => (
  <>
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      <div className="d-flex align-items-center justify-content-center p-5">
        <div className="text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="fs-3"> <span className="text-danger">Opps!</span> Página não encontrada.</p>
          <p className="lead">
            O link que você digitou não existe. Por valor verifique o endereço digitado.
          </p>
          <Link to='/'>
            <ComponentButtonCommon text='Ir para a página inicial' />
          </Link>
        </div>
      </div>
    </div>
  </>
)