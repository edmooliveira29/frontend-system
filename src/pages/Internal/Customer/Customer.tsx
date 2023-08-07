import React from 'react'
import { TableComponent } from '../../../components/table'
import './styles.sass'
export const Customer = () => {
  return (<>

    <div className="row border border-secondary rounded" id="div-list-customer">
      <h4 id="title-customer-data">Clientes Jurídicos</h4>
      <TableComponent />
    </div>

  </>
  )
}