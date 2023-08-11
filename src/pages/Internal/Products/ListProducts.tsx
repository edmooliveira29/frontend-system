import React from 'react'
import './styles.sass'
import { fakerPT_BR } from '@faker-js/faker'
import { Link } from 'react-router-dom'
import { ComponentButtonCommon, TableComponent } from '../../../components'

export const ListProduct = () => {
  function createData(): any {
    return {
      name: fakerPT_BR.commerce.productName(),
      description: fakerPT_BR.commerce.productDescription().slice(0,50),
      category: fakerPT_BR.commerce.department(),
      price: fakerPT_BR.commerce.price({ symbol: 'R$ ' }),
      stock: fakerPT_BR.number.int({ min: 0, max: 150 })
    }
  }

  const data: any[] = Array.from({ length: 50 }, () => createData())

  const columnHeaders = [
    { id: 'name', label: 'NOME', sortable: true },
    { id: 'description', label: 'Descrição', sortable: true },
    { id: 'category', label: 'Categoria', sortable: true },
    { id: 'price', label: 'Preço', sortable: true },
    { id: 'stock', label: 'Estoque', sortable: true },
  ]

  return (<>
    <div className="row border border-secondary rounded" id="div-list-customer">
      <div className="col-sm-12 col-md-9 p-0 border-secondary">
        <h4 className="col-sm-12" id="title-natural-person">Produtos</h4>
      </div>
      <div className="col-sm-12 col-md-3 d-flex justify-content-center align-items-center p-2 p-2">
        <Link to="/produtos/adicionar">
          <ComponentButtonCommon text='Adicionar' sizewidth='200px' />
        </Link>
      </div>
      <TableComponent data={data} head={columnHeaders} />
    </div>
  </>
  )
}