import React, { useEffect, useState } from 'react'
import './styles.sass'
import { Link, useNavigate } from 'react-router-dom'
import { ComponentButtonCommon, TableComponent } from '../../../components'
import { BsFileEarmarkPdf } from 'react-icons/bs'
import { Tooltip } from '@mui/material'
import { generatePDF } from '../../../utils'
import { CategoryService } from '../../../services/Category'

export const ListCategory = () => {
  const [data, setData] = useState<any[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const getAllCategories = async () => {
      const categoryResponse  = new CategoryService()
      const categories = await categoryResponse .getAll(JSON.parse(localStorage.getItem('company') as any)._id)
      categories.data = categories.data.map((category: any) => {
        return {
          _id: category._id,
          type: category.type === 'product' ? 'PRODUTO' : 'SERVIÇO',
          name: category.name,
          description: category.description
        }
      })
      setData(categories.data)
    }
    getAllCategories()
  }, [])

  const deleteItem = async (id: string) => {
    const categoryResponse  = new CategoryService()
    await categoryResponse .delete(id)
    const categories = await categoryResponse .delete(id)
    setData(categories.data)
  }

  const columnHeaders = [
    { _id: 'type', label: 'TIPO', sortable: true, viewInTable: true },
    { _id: 'name', label: 'NOME', sortable: true, viewInTable: true},
    { _id: 'description', label: 'DESCRIÇÃO', sortable: true, viewInTable: true}
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
          <div className="col-3 d-flex align-items-center" style={{ right: '15px' }}>
            <Tooltip title='Clique aqui para gerar PDF' placement='bottom' arrow>
              <i><BsFileEarmarkPdf size={30} color={'black'} onClick={() => generatePDF(data, ['NOME', 'TIPO', 'DESCRIÇÃO'], 'categoria', ['name', 'type', 'description'])} style={{ cursor: 'pointer' }} /></i>
            </Tooltip>
          </div>
        </div>
      </div>
      <TableComponent navigate={navigate} deleteItem={deleteItem} data={data} head={columnHeaders} title='categorias' translations={columnHeaders} />
    </div>
  </>
  )
}