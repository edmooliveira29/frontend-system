import React from 'react'
import './styles.sass'
import { fakerPT_BR } from '@faker-js/faker'
import { Link } from 'react-router-dom'
import { ComponentButtonCommon, TableComponent } from '../../../components'
import { Tooltip } from '@mui/material'
import { BsFileEarmarkPdf } from 'react-icons/bs'
import { generatePDF } from '../../../utils'

export const ListProduct = () => {
  function createData(): any {
    return {
      name: fakerPT_BR.commerce.productName(),
      description: fakerPT_BR.commerce.productDescription().slice(0, 50),
      category: fakerPT_BR.commerce.department(),
      price: fakerPT_BR.commerce.price({ symbol: 'R$ ' }),
      stock: fakerPT_BR.number.int({ min: 0, max: 150 })
    }
  }

  const data: any[] = Array.from({ length: 50 }, () => createData())

  const columnHeaders = [
    { id: 'name', label: 'NOME', sortable: true },
    { id: 'description', label: 'Descrição', sortable: true },
    { id: 'category', label: 'Categoria', sortable: true },
    { id: 'price', label: 'Preço', sortable: true },
    { id: 'stock', label: 'Estoque', sortable: true },
  ]

  return (<>
    <div className="row border border-secondary rounded" id="div-list-customer">
      <div className="col-sm-12 col-md-9 p-0 border-secondary">
        <h4 className="col-sm-12" id="title-natural-person">Produtos</h4>
      </div>
      <div className="col-sm-12 col-md-3 d-flex justify-content-center align-items-center p-2">
        <div className="row">
          <div className="col-9">
            <Tooltip title='Clique aqui para adicionar um produto' placement='bottom' arrow>
              <Link to="/produtos/adicionar">
                <i> <ComponentButtonCommon text='Adicionar' sizeWidth='250px' id='add-product' /></i>
              </Link>
            </Tooltip>

          </div>
          <div className="col-3 d-flex justify-content-center align-items-center">
            <Tooltip title='Clique aqui para gerar PDF' placement='bottom' arrow>
              <i><BsFileEarmarkPdf size={30} color={'black'} onClick={() => generatePDF(data, ['NOME', 'DESCRIÇÃO', 'CATEGORIA', 'PREÇO', 'ESTOQUE'], 'produtos')} style={{ cursor: 'pointer' }} /></i>
            </Tooltip>
          </div>
        </div>
      </div>
      <TableComponent data={data} head={columnHeaders} />
    </div>
  </>
  )
}