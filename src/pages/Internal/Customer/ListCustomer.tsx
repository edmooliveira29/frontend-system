import React, { useEffect, useState } from 'react'
import { TableComponent } from '../../../components/tableList'
import './styles.sass'
import { ComponentButtonCommon } from '../../../components'
import { Link, useNavigate } from 'react-router-dom'
import { BsFileEarmarkPdf } from 'react-icons/bs'
import { Tooltip } from '@mui/material'

import { generatePDF } from '../../../utils'
import { CustomerService } from '../../../services/Customer'
export const ListCustomer = () => {
  const [data, setData] = useState<any[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const getAllCustomers = async () => {
      const customerResponse  = new CustomerService()
      const customers = await customerResponse.getAll()
      setData(customers.data)
    }
    getAllCustomers()
  }, [])

  const deleteItem = async (id: string) => {
    const customerResponse = new CustomerService()
    await customerResponse.delete(id)
    const customer = await customerResponse.delete(id)
    customer.data.map((customer: any) => customer.typeCustomer === 'natural' ? { ...customer, typeCustomer: 'FÍSICA'} : {...customer, typeCustomer: 'JURÍDICA'})
    setData(customer.data)
  }
  const columnHeaders = [
    { _id: 'typeCustomer', label: 'TIPO', sortable: true, viewInTable: true },
    { _id: 'cnpj', label: 'CNPJ', sortable: true, viewInTable: false },
    { _id: 'name', label: 'NOME', sortable: true, viewInTable: true },
    { _id: 'phoneNumber', label: 'TELEFONE', sortable: true, viewInTable: true },
    { _id: 'email', label: 'EMAIL', sortable: true, viewInTable: true },
    { _id: 'city', label: 'Cidade', sortable: true, viewInTable: true },
    { _id: 'stateOfTheCountry', label: 'Estado', sortable: true, viewInTable: true },
    { _id: 'legalResponsible', label: 'RESPONSAVEL LEGAL', sortable: true, viewInTable: false },
    {_id: 'fantasyName', label: 'NOME FANTASIA', sortable: true, viewInTable: false},
    {_id:'stateRegistration', label: 'INSC. ESTADUAL', sortable: true, viewInTable: false},
    {_id:'additionalInformation', label: 'INFORMAÇOES ADICIONAIS', sortable: true, viewInTable: false},
    {_id:'zipCode', label: 'CEP', sortable: true, viewInTable: false},
    {_id:'street', label: 'RUA/AVENIDA', sortable: true, viewInTable: false},
    {_id:'houseNumber', label: 'NUMERO', sortable: true, viewInTable: false},
    {_id:'complement', label: 'COMPLEMENTO', sortable: true, viewInTable: false},
    {_id:'neighborhood', label: 'BAIRRO', sortable: true, viewInTable: false},
    {_id:'stateOfTheCountry', label: 'ESTADO', sortable: true, viewInTable: false},
    {_id:'city', label: 'CIDADE', sortable: true, viewInTable: false},

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
          <div className="col-3 d-flex align-items-center" style={{ right: '15px' }}>
            <Tooltip title='Clique aqui para gerar PDF' placement='bottom' arrow>
              <i><BsFileEarmarkPdf size={30} color={'black'} onClick={() => generatePDF(data, ['NOME', 'CNPJ', 'TELEFONE', 'EMAIL', 'CIDADE', 'UF'], 'Clientes', ['name', 'cnpj', 'phonenumber', 'email', 'city', 'stateOfTheCountry'])} style={{ cursor: 'pointer' }} /></i>
            </Tooltip>
          </div>
        </div>
      </div>
      <TableComponent navigate={navigate} deleteItem={deleteItem} data={data} head={columnHeaders} title='clientes' translations={columnHeaders} />
    </div>
  </>
  )
}