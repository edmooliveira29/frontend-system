import React from 'react'
import './styles.sass'
import { fakerPT_BR } from '@faker-js/faker'
import { Link } from 'react-router-dom'
import { ComponentButtonCommon, TableComponent } from '../../../components'
import { Tooltip } from '@mui/material'
import { BsFileEarmarkPdf } from 'react-icons/bs'
import { generatePDF } from '../../../utils'

export const ListEmployee: React.FC = () => {
  function createData(): any {
    return {
      name: fakerPT_BR.person.fullName(),
      office: fakerPT_BR.person.jobArea(),
      department: fakerPT_BR.commerce.department(),
      hiringDate: new Date().toLocaleDateString('pt-BR'),
      wage: fakerPT_BR.finance.amount(0, 10000, 2, 'R$'),
    }
  }

  const data: any[] = Array.from({ length: 50 }, () => createData())

  const columnHeaders = [
    { _id: 'name', label: 'Nome', sortable: true },
    { _id: 'office', label: 'Cargo', sortable: true },
    { _id: 'department', label: 'Categoria', sortable: true },
    { _id: 'hiringDate', label: 'Data de contratação', sortable: true },
    { _id: 'wage', label: 'Salário', sortable: true },
  ]

  return (<>
    <div className="row border border-secondary rounded" id="div-list-customer">
      <div className="col-sm-12 col-md-9 p-0 border-secondary">
        <h4 className="col-sm-12" id="title-natural-person">Colaboradores</h4>
      </div>
      <div className="col-sm-12 col-md-3 d-flex justify-content-center align-items-center p-2">
        <div className="row">
          <div className="col-9">
            <Tooltip title='Clique aqui para adicionar um produto' placement='bottom' arrow>
              <Link to="/colaboradores/adicionar">
                <i> <ComponentButtonCommon text='Adicionar' sizeWidth='250px' id='add-product' /></i>
              </Link>
            </Tooltip>

          </div>
          <div className="col-3 d-flex align-items-center" style={{ right: '15px' }}>
            <Tooltip title='Clique aqui para gerar PDF' placement='bottom' arrow>
              <i><BsFileEarmarkPdf size={30} color={'black'} onClick={() => generatePDF(data, ['NOME', 'CARGO', 'DEPARTAMENTO', 'DATA DE CONTRATACÃO', 'SALÁRIO'], 'colaboradores', ['name', 'office', 'department', 'hiringDate', 'wage'])} style={{ cursor: 'pointer' }} /></i>
            </Tooltip>
          </div>
        </div>
      </div>
      <TableComponent deleteItem={() => { return }} data={data} head={columnHeaders} title='produto' translations={columnHeaders} />
    </div>
  </>
  )
}