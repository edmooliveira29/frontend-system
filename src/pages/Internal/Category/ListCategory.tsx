import React from 'react'
import './styles.sass'
import { fakerPT_BR } from '@faker-js/faker'
import { Link } from 'react-router-dom'
import { ComponentButtonCommon, TableComponent } from '../../../components'

export const ListCategory = () => {
  function createData(): any {
    return {
      type: Math.floor(Math.random() * 2) === 0 ? 'COMPRA': 'VENDA',
      name: fakerPT_BR.commerce.productDescription().slice(0,50),
      description: fakerPT_BR.string.alpha(20)
    }
  }

  const data: any[] = Array.from({ length: 50 }, () => createData())

  const columnHeaders = [
    { id: 'type', label: 'TIPO', sortable: true },
    { id: 'name', label: 'NOME', sortable: true },
    { id: 'description', label: 'Descrição', sortable: true }
  ]

  return (<>
    <div className="row border border-secondary rounded" id="div-list-customer">
      <div className="col-sm-12 col-md-9 p-0 border-secondary">
        <h4 className="col-sm-12" id="title-natural-person">Categorias</h4>
      </div>
      <div className="col-sm-12 col-md-3 d-flex justify-content-center align-items-center p-2 p-2">
        <Link to="/categorias/adicionar">
          <ComponentButtonCommon text='Adicionar' sizeWidth='200px' id='add-category'/>
        </Link>
      </div>
      <TableComponent data={data} head={columnHeaders} />
    </div>
  </>
  )
}