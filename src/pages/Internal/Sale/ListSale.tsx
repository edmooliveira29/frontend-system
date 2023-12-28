import React, { useEffect, useState } from 'react'
import './styles.sass'
import { Link, useNavigate } from 'react-router-dom'
import { ComponentButtonCommon, TableComponent } from '../../../components'
import { Tooltip } from '@mui/material'
import { generatePDF } from '../../../utils'
import { BsFileEarmarkPdf } from 'react-icons/bs'
import { SaleService } from '../../../services/Sale'

export const ListSale = () => {
  const [data, setData] = useState<any[]>([])
  const navigate = useNavigate()
  useEffect(() => {
    const getAllSales = async () => {
      const saleResponse  = new SaleService()
      const sales = await saleResponse .getAll()
      setData(sales.data)
    }
    getAllSales()
  },[])
  const columnHeaders = [
    { _id: 'saleNumber', label: 'Número da venda', sortable: true, viewInTable: true },
    { _id: 'dateOfSale', label: 'Data', sortable: true ,viewInTable: true},
    { _id: 'customerId.name', label: 'Cliente', sortable: true ,viewInTable: true},
    { _id: 'resumeOfSale.totalOfSale', label: 'Preço', sortable: true ,viewInTable: true},
  ]

  const deleteItem = async (id: string) => {
    console.log(id)
    const saleResponse = new SaleService()
    await saleResponse.delete(id)
    const sales = await saleResponse.delete(id)
    setData(sales.data)
  }

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
          <div className="col-3 d-flex align-items-center" style={{ right: '15px' }}>
            <Tooltip title='Clique aqui para gerar PDF' placement='bottom' arrow>
              <i><BsFileEarmarkPdf size={30} color={'black'} onClick={() => generatePDF(data, ['NÚMERO', 'DATA', 'CLIENTE', 'PREÇO', 'STATUS'], 'vendas',['number', 'date', 'customer', 'price', 'status'])} style={{ cursor: 'pointer' }} /></i>
            </Tooltip>
          </div>
        </div>
      </div>
      <TableComponent navigate={navigate} deleteItem={deleteItem} data={data} head={columnHeaders} title='venda' translations={columnHeaders} />
    </div>
  </>
  )
}