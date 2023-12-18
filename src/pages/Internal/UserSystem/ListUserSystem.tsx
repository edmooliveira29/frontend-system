import React, { useEffect, useState } from 'react'
import './styles.sass'
import { Link, useNavigate } from 'react-router-dom'
import { ComponentButtonCommon, TableComponent } from '../../../components'
import { BsFileEarmarkPdf } from 'react-icons/bs'
import { Tooltip } from '@mui/material'
import { generatePDF } from '../../../utils'
import { UserService } from '../../../services/User'

export const ListUserSystem = () => {
  const [data, setData] = useState<any[]>([])
  const navigate = useNavigate()
  useEffect(() => {
    const getAllUsers = async () => {
      const userRespose = new UserService()
      const users = await userRespose.getAll()
      setData(users.data)
    }
    getAllUsers()
  }, [])
  
  const columnHeaders = [
    { _id: 'role', label: 'PERMISSÃO', sortable: true },
    { _id: 'name', label: 'NOME', sortable: true },
    { _id: 'email', label: 'EMAIL', sortable: true },
  ]

  return (<>
    <div className="row border border-secondary rounded" id="div-list-customer">
      <div className="col-sm-12 col-md-9 p-0 border-secondary">
        <h4 className="col-sm-12" id="title-natural-person">Usuário</h4>
      </div>
      <div className="col-sm-12 col-md-3 d-flex justify-content-center align-items-center p-2">
        <div className="row">
          <div className="col-9">
            <Tooltip title='Clique aqui para adicionar um usuário' placement='bottom' arrow>
              <Link to="/usuario/adicionar">
                <i> <ComponentButtonCommon text='Adicionar' sizeWidth='250px' id='add-category' /></i>
              </Link>
            </Tooltip>

          </div>
          <div className="col-3 justify-content-center align-items-center">
            <Tooltip title='Clique aqui para gerar PDF' placement='bottom' arrow>
              <i><BsFileEarmarkPdf size={30} color={'black'} onClick={() => generatePDF(data, ['PERMISSÃO', 'NOME', 'EMAIL'], 'usuários', ['role', 'name', 'email'])} style={{ cursor: 'pointer' }} /></i>
            </Tooltip>
          </div>
        </div>
      </div>
      <TableComponent navigate={navigate} data={data} head={columnHeaders} title='usuário' translations={columnHeaders} />
    </div>
  </>
  )
}