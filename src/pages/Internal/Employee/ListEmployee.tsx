import React, { useEffect, useState } from 'react'
import './styles.sass'
import { Link, useNavigate } from 'react-router-dom'
import { ComponentButtonCommon, TableComponent } from '../../../components'
import { Tooltip } from '@mui/material'
import { BsFileEarmarkPdf } from 'react-icons/bs'
import { generatePDF } from '../../../utils'
import { EmployeeService } from '../../../services/Employee'

export const ListEmployee: React.FC = () => {
  const [data, setData] = useState<any[]>([])
  const navigate = useNavigate()
  const userLogged = JSON.parse(localStorage.getItem('userLogged') as any)
  useEffect(() => {
    const getAllCategories = async () => {
      const employeeResponse = new EmployeeService()
      const categories = await employeeResponse.getAll(JSON.parse(localStorage.getItem('company') as any)._id)
      setData(categories.data)
    }
    getAllCategories()
  }, [])

  const deleteItem = async (id: string) => {
    const employeeResponse = new EmployeeService()
    await employeeResponse.delete(id)
    const employees = await employeeResponse.getAll(JSON.parse(localStorage.getItem('company') as any)._id)
    setData(employees.data)
  }

  const infoData = [
    { _id: 'name', label: 'NOME', sortable: true, viewInTable: true },
    { _id: 'cpf', label: 'CPF', sortable: true, viewInTable: false },
    { _id: 'birthday', label: 'Data de nascimento', sortable: true, viewInTable: false },
    { _id: 'gender', label: 'Gênero', sortable: true, viewInTable: false },
    { _id: 'phoneNumber', label: 'Telefone', sortable: true, viewInTable: false },
    { _id: 'email', label: 'E-mail', sortable: true, viewInTable: true },
    { _id: 'zipCode', label: 'CEP', sortable: true, viewInTable: false },
    { _id: 'city', label: 'Cidade', sortable: true, viewInTable: false },
    { _id: 'stateOfTheCountry', label: 'Estado', sortable: true, viewInTable: false },
    { _id: 'street', label: 'Rua/Avenida', sortable: true, viewInTable: false },
    { _id: 'houseNumber', label: 'Numero', sortable: true, viewInTable: false },
    { _id: 'complement', label: 'Complemento', sortable: true, viewInTable: false },
    { _id: 'neighborhood', label: 'Bairro', sortable: true, viewInTable: false },
    { _id: 'office', label: 'Cargo', sortable: true, viewInTable: true },
    { _id: 'department', label: 'Departamento', sortable: true, viewInTable: false },
    { _id: 'hiringDate', label: 'Data de contratação', sortable: true, viewInTable: true },
    { _id: 'wage', label: 'Salário', sortable: true, viewInTable: true },
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
                <i> <ComponentButtonCommon text='Adicionar' sizeWidth='250px' id='add-employee' /></i>
              </Link>
            </Tooltip>

          </div>
          {userLogged.role !== 'salesman' && <div className="col-3 d-flex align-items-center" style={{ right: '15px' }}>
            <Tooltip title='Clique aqui para gerar PDF' placement='bottom' arrow>
              <i><BsFileEarmarkPdf size={30} color={'black'} onClick={() => generatePDF(data, ['NOME', 'CARGO', 'EMAIL', 'DATA DE CONTRATACÃO', 'SALÁRIO'], 'colaboradores', ['name', 'office', 'email', 'hiringDate', 'wage'])} style={{ cursor: 'pointer' }} /></i>
            </Tooltip>
          </div>}
        </div>
      </div>
      <TableComponent navigate={navigate} deleteItem={deleteItem} data={data} head={infoData} title='colaboradores' translations={infoData} />
    </div>
  </>
  )
}