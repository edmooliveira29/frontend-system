import React from 'react'
import './styles.sass'
import { fakerPT_BR } from '@faker-js/faker'
import { Link } from 'react-router-dom'
import { ComponentButtonCommon, TableComponent } from '../../../components'
import { Tooltip } from '@mui/material'
import { generatePDF } from '../../../utils'
import { BsFileEarmarkPdf } from 'react-icons/bs'

export const ListSale = () => {
  function createData(): any {
    return {
      number: fakerPT_BR.number.int({ min: 1, max: 100 }),
      date: fakerPT_BR.date.anytime().toLocaleDateString(),
      customer: fakerPT_BR.person.fullName(),
      price: fakerPT_BR.commerce.price({ symbol: 'R$ ' }),
      status: fakerPT_BR.datatype.boolean() ? 'FINALIZADO' : 'ABERTO',
    }
  }

  const data: any[] = Array.from({ length: 50 }, () => createData())

  const columnHeaders = [
    { _id:'number', label: 'Número', sortable: true },
    { _id:'date', label: 'Data', sortable: true },
    { _id:'customer', label: 'Cliente', sortable: true },
    { _id:'price', label: 'Preço', sortable: true },
    { _id:'status', label: 'Status', sortable: true },
  ]

  return (<>
    <div className="row border border-secondary rounded" id="div-list-customer">
      <div className="col-sm-12 col-md-9 p-0 border-secondary">
        <h4 className="col-sm-12" id="title-natural-person">Vendas</h4>
      </div>
      <div className="col-sm-12 col-md-3 d-flex justify-content-center align-items-center p-2">
        <div className="row">
          <div className="col-9">
            <Tooltip title='Clique aqui para adicionar uma venda' placement='bottom' arrow>
              <Link to="/vendas/adicionar">
                <i> <ComponentButtonCommon text='Adicionar' sizeWidth='250px' id='add-sale' /></i>
              </Link>
            </Tooltip>

          </div>
          <div className="col-3 d-flex justify-content-center align-items-center">
            <Tooltip title='Clique aqui para gerar PDF' placement='bottom' arrow>
              <i><BsFileEarmarkPdf size={30} color={'black'} onClick={() => generatePDF(data, ['NÚMERO', 'DATA', 'CLIENTE', 'PREÇO', 'STATUS'], 'vendas')} style={{ cursor: 'pointer' }} /></i>
            </Tooltip>
          </div>
        </div>
      </div>
      <TableComponent data={data} head={columnHeaders} title='venda' translations={columnHeaders}/>
    </div>
  </>
  )
}