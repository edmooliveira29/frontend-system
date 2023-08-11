import React from 'react'
import { TableComponent } from '../../../../components/tableList'
import '../styles.sass'
import { fakerPT_BR } from '@faker-js/faker'
import { ComponentButtonCommon } from '../../../../components'
import { Link } from 'react-router-dom'

export const ListNaturalPerson = () => {
  function createData(): any {
    return {
      name: fakerPT_BR.company.name(),
      cpf: fakerPT_BR.location.zipCode({ format: '###.###.###-##' }),
      birthday: fakerPT_BR.date.anytime().toLocaleDateString(),
      email: (fakerPT_BR.internet.email()).toLowerCase(),
      phoneNumber: fakerPT_BR.phone.number('(##) 99###-####'),
      state: fakerPT_BR.location.state({ abbreviated: true }),

    }
  }

  const data: any[] = Array.from({ length: 1500 }, () => createData())

  const columnHeaders = [
    { id: 'name', label: 'NOME', sortable: true },
    { id: 'cpf', label: 'CPF', sortable: true },
    { id: 'birthday', label: 'Data de Nascimento', sortable: true },
    { id: 'email', label: 'Email', sortable: true },
    { id: 'phoneNumber', label: 'Telefone', sortable: true },
    { id: 'state', label: 'Estado', sortable: false }
  ]

  return (<>

    <div className="row border border-secondary rounded" id="div-list-customer">
      <div className="col-sm-12 col-md-9 p-0 border-secondary">
        <h4 className="col-sm-12" id="title-natural-person">Clientes Físico</h4>

      </div>
      <div className="col-sm-12 col-md-3 d-flex justify-content-center align-items-center p-2 p-2">
        <Link to="/clientes/fisico/adicionar">
          <ComponentButtonCommon text='Adicionar' sizewidth='200px' />
        </Link>
      </div>
      <TableComponent data={data} head={columnHeaders} />
    </div>
  </>
  )
}