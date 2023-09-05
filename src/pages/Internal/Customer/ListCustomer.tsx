import React from 'react'
import { TableComponent } from '../../../components/tableList'
import './styles.sass'
import { fakerPT_BR } from '@faker-js/faker'
import { ComponentButtonCommon } from '../../../components'
import { Link } from 'react-router-dom'
import { BsFileEarmarkPdf } from 'react-icons/bs'
import { Tooltip } from '@mui/material'

import { generatePDF } from '../../../utils'
export const ListCustomer = () => {
  function createData(): any {
    return {
      name: fakerPT_BR.person.fullName(),
      cnpj: fakerPT_BR.location.zipCode({ format: '##.###.###/####-##' }),
      phonenumber: fakerPT_BR.phone.number('(##) 99###-####'),
      email: (fakerPT_BR.internet.email()).toLowerCase(),
      city: fakerPT_BR.location.city(),
      stateOfTheCountry: fakerPT_BR.location.state({ abbreviated: true }),
    }
  }

  const data: any[] = Array.from({ length: 100 }, () => createData())

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
        <h4 className="col-sm-12" id="title-natural-person">Clientes</h4>
      </div>
      <div className="col-sm-12 col-md-3 d-flex justify-content-center align-items-center p-2">
        <div className="row">
          <div className="col-9">
            <Tooltip title='Clique aqui para adicionar um cliente' placement='bottom' arrow>
              <Link to="/clientes/adicionar">
                <i> <ComponentButtonCommon text='Adicionar' sizeWidth='250px' id='add-customer' /></i>
              </Link>
            </Tooltip>

          </div>
          <div className="col-3 d-flex justify-content-center align-items-center">
            <Tooltip title='Clique aqui para gerar PDF' placement='bottom' arrow>
              <i><BsFileEarmarkPdf size={30} color={'black'} onClick={() => generatePDF(data, ['NOME', 'CNPJ', 'TELEFONE', 'EMAIL', 'CIDADE', 'UF'], 'Clientes')} style={{ cursor: 'pointer' }} /></i>
            </Tooltip>
          </div>
        </div>
      </div>
      <TableComponent data={data} head={columnHeaders} />
    </div>
  </>
  )
}