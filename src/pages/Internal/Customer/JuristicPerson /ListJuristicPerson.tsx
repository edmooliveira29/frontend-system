import React from 'react'
import { TableComponent } from '../../../../components/tableList'
import '../styles.sass'
import { fakerPT_BR } from '@faker-js/faker'
import { ComponentButtonCommon } from '../../../../components'
import { Link } from 'react-router-dom'

export const ListJuristicPerson = () => {
  function createData(): any {
    return {
      name: fakerPT_BR.company.name(),
      cnpj: fakerPT_BR.location.zipCode({ format: '##.###.###/####-##' }),
      phonenumber: fakerPT_BR.phone.number('(##) 99###-####'),
      email: (fakerPT_BR.internet.email()).toLowerCase(),
      city: fakerPT_BR.location.city(),
      state: fakerPT_BR.location.state({ abbreviated: true }),

    }
  }

  const data: any[] = Array.from({ length: 50 }, () => createData())

  const columnHeaders = [
    { id: 'name', label: 'NOME', sortable: true },
    { id: 'cnpj', label: 'CNPJ', sortable: true },
    { id: 'phonenumber', label: 'TELEFONE', sortable: true },
    { id: 'email', label: 'EMAIL', sortable: true },
    { id: 'city', label: 'Cidade', sortable: true },
    { id: 'stateOfTheCountry', label: 'Estado', sortable: true }
  ]
  return (<>

    <div className="row border border-secondary rounded" id="div-list-customer">
      <div className="col-sm-12 col-md-9 p-0 border-secondary">
        <h4 className="col-sm-12" id="title-natural-person">Clientes Jurídicos</h4>

      </div>
      <div className="col-sm-12 col-md-3 d-flex justify-content-center align-items-center p-2 p-2">
        <Link to="/clientes/juridico/adicionar">
          <ComponentButtonCommon text='Adicionar' sizewidth='200px' />
        </Link>
      </div>
      <TableComponent data={data} head={columnHeaders} />
    </div>
  </>
  )
}