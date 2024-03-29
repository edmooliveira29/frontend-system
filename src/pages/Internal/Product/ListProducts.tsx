import React, { useEffect, useState } from 'react'
import './styles.sass'
import { Link, useNavigate } from 'react-router-dom'
import { ComponentButtonCommon, TableComponent } from '../../../components'
import { Tooltip } from '@mui/material'
import { BsFileEarmarkPdf } from 'react-icons/bs'
import { Masks, generatePDF } from '../../../utils'
import { ProductService } from '../../../services/Product'

export const ListProduct = () => {
  const [data, setData] = useState<any[]>([])
  const mask = new Masks()
  const navigate = useNavigate()
  const userLogged = JSON.parse(localStorage.getItem('userLogged') as any)
  useEffect(() => {
    const getAllProducts = async () => {
      const productResponse = new ProductService()
      const products = await productResponse.getAll(JSON.parse(localStorage.getItem('company') as any)._id)
      products.data = products.data.map((product: any) => {
        return {
          ...product,
          category: product.category.name,
          price: "R$ " + mask.maskMoney(product.price),
        }
      })
      setData(products.data)
    }
    getAllProducts()
  }, [])

  const columnHeaders = [
    { _id: 'name', label: 'NOME', sortable: true, viewInTable: true },
    { _id: 'description', label: 'DESCRIÇÃO', sortable: true, viewInTable: true },
    { _id: 'category', label: 'CATEGORIA', sortable: true, viewInTable: true },
    { _id: 'price', label: 'PREÇO', sortable: true, viewInTable: true },
    { _id: 'quantityInStock', label: 'QUANT. EM ESTOQUE', sortable: true, viewInTable: true },
  ]

  const deleteItem = async (id: string) => {
    const productResponse = new ProductService()
    await productResponse.delete(id)
    const products = await productResponse.getAll(JSON.parse(localStorage.getItem('company') as any)._id)
    products.data = products.data.map((product: any) => {
      return {
        ...product,
        category: product.category.name,
        price: "R$ " + mask.maskMoney(product.price),
      }
    })
    setData(products.data)
  }

  return (<>
    <div className="row border border-secondary rounded" id="div-list-product">
      <div className="col-sm-12 col-md-9 p-0 border-secondary">
        <h4 className="col-sm-12" id="title-natural-person">Produtos/Serviços</h4>
      </div>
      <div className="col-sm-12 col-md-3 d-flex justify-content-center align-items-center p-2">
        <div className="row">
          <div className="col-9">
            <Tooltip title='Clique aqui para adicionar um produto' placement='bottom' arrow>
              <Link to="/produtos-servicos/adicionar">
                <i> <ComponentButtonCommon text='Adicionar' sizeWidth='250px' id='add-product' /></i>
              </Link>
            </Tooltip>

          </div>
          {userLogged.role !== 'salesman' && <div className="col-3 d-flex align-items-center" style={{ right: '15px' }}>
            <Tooltip title='Clique aqui para gerar PDF' placement='bottom' arrow>
              <i><BsFileEarmarkPdf size={30} color={'black'} onClick={() => generatePDF(data, ['NOME', 'DESCRIÇÃO', 'CATEGORIA', 'PREÇO', 'ESTOQUE'], 'produtos', ['name', 'description', 'category', 'price', 'quantityInStock'])} style={{ cursor: 'pointer' }} /></i>
            </Tooltip>
          </div>}
        </div>
      </div>
      <TableComponent navigate={navigate} deleteItem={deleteItem} data={data} head={columnHeaders} title='produtos-servicos' translations={columnHeaders} />
    </div>
  </>
  )
}