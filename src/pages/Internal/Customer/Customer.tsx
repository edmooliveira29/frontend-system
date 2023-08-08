import React from 'react'
import { TableComponent } from '../../../components/table'
import './styles.sass'
import { faker, fakerPT_BR } from '@faker-js/faker'
export const Customer = () => {
  function createData(): any {
    return {
      name: fakerPT_BR.company.name(),
      cnpj: fakerPT_BR.location.zipCode({format:'##.###.###/####-##'}),
      phonenumber: fakerPT_BR.phone.number('(##) 99###-####'),
      email: (fakerPT_BR.internet.email()).toLowerCase(),
      city: fakerPT_BR.location.city(),
      state: fakerPT_BR.location.state({abbreviated: true}),

    }
  }

  const data: any[] = Array.from({ length: 159852}, () => createData())

  const columnHeaders = [
    { id: 'name', label: 'NOME', sortable: true },
    { id: 'cnpj', label: 'CNPJ', sortable: true },
    { id: 'phonenumber', label: 'TELEFONE', sortable: true },
    { id: 'email', label: 'EMAIL', sortable: true },
    { id: 'city', label: 'Cidade', sortable: true },
    { id: 'state', label: 'Estado', sortable: true }
  ]
  return (<>

    <div className="row border border-secondary rounded" id="div-list-customer">
      <h4 id="title-customer-data">Clientes Jurídicos</h4>
      <TableComponent data={data} head={columnHeaders} />
    </div>
  </>
  )
}