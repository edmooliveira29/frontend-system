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
  const userLogged = JSON.parse(localStorage.getItem('userLogged') as any)
  useEffect(() => {
    const getAllSales = async () => {
      const saleResponse = new SaleService()
      const sales = await saleResponse.getAll(JSON.parse(localStorage.getItem('company') as any)._id)
      setData(sales.data)
    }
    getAllSales()
  }, [])

  const columnHeaders = [
    { _id: 'saleNumber', label: 'NÚMERO', sortable: true, viewInTable: true },
    { _id: 'dateOfSale', label: 'DATA', sortable: true, viewInTable: true },
    { _id: 'customer.name', label: 'CLIENTE', sortable: true, viewInTable: true },
    { _id: 'resumeOfSale.totalOfSale', label: 'VALOR', sortable: true, viewInTable: true },
  ]
  const deleteItem = async (id: string) => {
    const saleResponse = new SaleService()
    await saleResponse.delete(id)
    const employees = await saleResponse.getAll(JSON.parse(localStorage.getItem('company') as any)._id)
    setData(employees.data)
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
          {userLogged.role !== 'salesman' && <div className="col-3 d-flex align-items-center" style={{ right: '15px' }}>
            <Tooltip title='Clique aqui para gerar PDF' placement='bottom' arrow>
              <i><BsFileEarmarkPdf size={30} color={'black'} onClick={() => generatePDF(data, ['NÚMERO', 'DATA', 'CLIENTE', 'VALOR'], 'vendas', ['saleNumber', 'dateOfSale', 'customer.name', 'resumeOfSale.totalOfSale'])} style={{ cursor: 'pointer' }} /></i>
            </Tooltip>
          </div>}
        </div>
      </div>
      <TableComponent navigate={navigate} deleteItem={deleteItem} data={data} head={columnHeaders} title='vendas' translations={columnHeaders} />
    </div>
  </>
  )
}
