import React from 'react'
import './styles.sass'
import { fakerPT_BR } from '@faker-js/faker'
import { Link } from 'react-router-dom'
import { ComponentButtonCommon, TableComponent } from '../../../components'
import { BsFileEarmarkPdf } from 'react-icons/bs'
import { Tooltip } from '@mui/material'
import { generatePDF } from '../../../utils'

export const ListCategory = () => {
  function createData(): any {
    return {
      type: Math.floor(Math.random() * 2) === 0 ? 'COMPRA' : 'VENDA',
      name: fakerPT_BR.commerce.productDescription().slice(0, 50),
      description: fakerPT_BR.string.alpha(20)
    }
  }

  const data: any[] = Array.from({ length: 50 }, () => createData())

  const columnHeaders = [
    { _id:'type', label: 'TIPO', sortable: true },
    { _id:'name', label: 'NOME', sortable: true },
    { _id:'description', label: 'Descrição', sortable: true }
  ]

  return (<>
    <div className="row border border-secondary rounded" id="div-list-customer">
      <div className="col-sm-12 col-md-9 p-0 border-secondary">
        <h4 className="col-sm-12" id="title-natural-person">Categorias</h4>
      </div>
      <div className="col-sm-12 col-md-3 d-flex justify-content-center align-items-center p-2">
        <div className="row">
          <div className="col-9">
            <Tooltip title='Clique aqui para adicionar uma categoria' placement='bottom' arrow>
              <Link to="/categorias/adicionar">
                <i> <ComponentButtonCommon text='Adicionar' sizeWidth='250px' id='add-category' /></i>
              </Link>
            </Tooltip>

          </div>
          <div className="col-3 d-flex justify-content-center align-items-center">
            <Tooltip title='Clique aqui para gerar PDF' placement='bottom' arrow>
              <i><BsFileEarmarkPdf size={30} color={'black'} onClick={() => generatePDF(data, ['NOME', 'TIPO', 'DESCRIÇÃO'], 'categoria')} style={{ cursor: 'pointer' }} /></i>
            </Tooltip>
          </div>
        </div>
      </div>
      <TableComponent data={data} head={columnHeaders} title='categoria'  translations={columnHeaders}/>
    </div>
  </>
  )
}