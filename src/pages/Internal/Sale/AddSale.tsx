import React from 'react'
import './styles.sass'
import { fakerPT_BR } from '@faker-js/faker'
import { Link } from 'react-router-dom'
import { ComponentButtonCommon, TableComponent } from '../../../components'

export const AddSale = () => {
  function createData(): any {
    return {
      number: fakerPT_BR.number.int({ min: 1, max: 100 }),
      date: fakerPT_BR.date.anytime().toLocaleDateString(),
      customer: fakerPT_BR.person.fullName(),
      price: fakerPT_BR.commerce.price({ symbol: 'R$ ' }),
      status: fakerPT_BR.datatype.boolean() ? 'Finalizado' : 'Aberto',
    }
  }

  const data: any[] = Array.from({ length: 50 }, () => createData())

  const columnHeaders = [
    { id: 'number', label: 'Número', sortable: true },
    { id: 'date', label: 'Data', sortable: true },
    { id: 'customer', label: 'Cliente', sortable: true },
    { id: 'price', label: 'Preço', sortable: true },
    { id: 'status', label: 'Status', sortable: true },
  ]

  return (<>
    <div className="row border border-secondary rounded" id="div-list-customer">
      <div className="col-sm-12 col-md-9 p-0 border-secondary">
        <h4 className="col-sm-12" id="title-natural-person">Vendas</h4>
      </div>
      <div className="col-sm-12 col-md-3 d-flex justify-content-center align-items-center p-2 p-2">
        <Link to="/vendas/adicionar">
          <ComponentButtonCommon text='Adicionar' sizewidth='200px' />
        </Link>
      </div>
      <TableComponent data={data} head={columnHeaders} />
    </div>
  </>
  )
}