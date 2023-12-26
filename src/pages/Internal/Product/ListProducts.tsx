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
  useEffect(() => {
    const getAllProducts = async () => {
      const productRespose = new ProductService()
      const products = await productRespose.getAll()
      products.data = products.data.map((product: any) => {
        return {
          _id: product._id,
          name: product.name,
          description: product.description,
          categoryId: product.categoryId.name,
          price: "R$ " + mask.maskMoney(product.price),
          quantityInStock: product.quantityInStock,
        }
      })
      setData(products.data)
    }
    getAllProducts()
  }, [])

  const columnHeaders = [
    { _id: 'name', label: 'NOME', sortable: true },
    { _id: 'description', label: 'DESCRICÃO', sortable: true },
    { _id: 'categoryId', label: 'CATEGORIA', sortable: true },
    { _id: 'price', label: 'PREÇO', sortable: true },
    { _id: 'quantityInStock', label: 'QUANT. EM ESTOQUE', sortable: true },
  ]

  const deleteItem = async (id: string) => {
    const productResponse = new ProductService()
    await productResponse.delete(id)
    const categories = await productResponse.delete(id)
    setData(categories.data)
  }

  return (<>
    <div className="row border border-secondary rounded" id="div-list-product">
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
          <div className="col-3 d-flex align-items-center" style={{ right: '15px' }}>
            <Tooltip title='Clique aqui para gerar PDF' placement='bottom' arrow>
              <i><BsFileEarmarkPdf size={30} color={'black'} onClick={() => generatePDF(data, ['NOME', 'DESCRIÇÃO', 'CATEGORIA', 'PREÇO', 'ESTOQUE'], 'produtos', ['name', 'description', 'category', 'price', 'quantityInStock'])} style={{ cursor: 'pointer' }} /></i>
            </Tooltip>
          </div>
        </div>
      </div>
      <TableComponent navigate={navigate} deleteItem={deleteItem} data={data} head={columnHeaders} title='produtos' translations={columnHeaders} />
    </div>
  </>
  )
}