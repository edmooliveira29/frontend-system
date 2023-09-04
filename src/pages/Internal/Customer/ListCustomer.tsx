import React from 'react'
import { TableComponent } from '../../../components/tableList'
import './styles.sass'
import { fakerPT_BR } from '@faker-js/faker'
import { ComponentButtonCommon } from '../../../components'
import { Link } from 'react-router-dom'
import { BsFileEarmarkPdf } from 'react-icons/bs'
import { Tooltip } from '@mui/material'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { generatePDF } from '../../../utils'
pdfMake.vfs = pdfFonts.pdfMake.vfs
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
      <div className="col-sm-12 col-md-6 p-0 border-secondary">
        <h4 className="col-sm-12" id="title-natural-person">Clientes</h4>
      </div>
      <div className="col-sm-12 col-md-6 d-flex justify-content-end align-items-center">
        <div className="row">
          <div className="col-sm-11 col-md-9 p-0">
            <Tooltip title='Clique aqui para adicionar um cliente' placement='bottom' arrow>
              <Link to="/clientes/adicionar">
                <i> <ComponentButtonCommon text='Adicionar' sizeWidth='200px' /></i>
              </Link>
            </Tooltip>

          </div>
          <div className="col-sm-1 col-md-3 d-flex justify-content-center align-items-center p-0">
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