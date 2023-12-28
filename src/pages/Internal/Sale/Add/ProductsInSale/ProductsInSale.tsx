import React, { useState } from 'react'
import { SelectFieldInput, TextFieldInput } from '../../../../../components'
import { Tooltip } from '@mui/material'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { addProductRow, removeProductRow, updateProduct } from './hooks'
import { ModalAdd } from '../../../../../components/modal/ModalAdd'

export const ProductsInSale: React.FC<{ state: any, setState: any, calculateTotalAmount: any, products: any, setProducts: any, setProductsDB: any, productsDB: any }> = (props) => {
  const numberOfProductsInSale: any[] = []
  props.state.products.map((_: any, index: number) => numberOfProductsInSale.push({_id: index}))
  const [productRows, setProductRows] = useState(numberOfProductsInSale)
  return <>
    <h6 className="col-sm-12 m-2" id="products-sale-title">PRODUTOS</h6>
    {productRows.map((row, id: number) => (
      <div key={`list-${id}`} className="row px-3 m-0">
        <div className="col-md-1 ">
          <TextFieldInput
            label="Item"
            placeholder=''
            required={false}
            disabled={true}
            value={String(row._id + 1)}
            typeInput="number"
            id={`item-${id}`}
          />
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-11">
              <SelectFieldInput
                id={`productId-${id}`}
                required={true}
                label='Produto'
                value={props.state.products[id]?.[`productId-${id}`] || ''}
                options={props.products}
                placeholder='Selecione um produto'
                onChange={(event: any) => updateProduct(props.state, props.setState, props.calculateTotalAmount, id, `productId-${id}`, event.target.value, props.productsDB, false)}
              />
            </div>
            <div className="col-1 d-flex align-items-center justify-content-center" style={{ top: '15px', position: 'relative' }}>
              <ModalAdd titleOfModel={'produto'} id={`add-new-product-${id}`} setData={props.setProducts} data={props.productsDB} setDataDB={props.setProductsDB} />
            </div>
          </div>

        </div>
        <div className="col-md-2">
          <TextFieldInput
            label="Quantidade"
            placeholder="Quantidade de produtos"
            required={true}
            value={props.state.products[id]?.[`quantity-${id}`] || ''}
            typeInput="number"
            id={`quantity-${id}`}
            onChange={(value: string) => { updateProduct(props.state, props.setState, props.calculateTotalAmount, id, `quantity-${id}`, value, props.productsDB, true) }}
          />
        </div>
        <div className="col-md-2">
          <TextFieldInput
            label="Valor Unitário"
            placeholder='Valor unitário do produto'
            required={true}
            value={props.state.products[id]?.[`unitValue-${id}`] || ''}
            typeInput="text"
            id={`unitValue-${id}`}
            onChange={(value: string) => updateProduct(props.state, props.setState, props.calculateTotalAmount, id, `unitValue-${id}`, value, props.productsDB, true)}
          />
        </div>
        <div className="col-md-2">
          <TextFieldInput
            id={`subtotal-${id}`}
            label="Subtotal"
            placeholder='R$0,00'
            required={false}
            value={
              props.state.products[id]?.[`quantity-${id}`] && props.state.products[id]?.[`unitValue-${id}`] ?
                String((Number(props.state.products[id]?.[`quantity-${id}`]) * Number((props.state.products[id][`unitValue-${id}`]).replace(',', '.'))).toFixed(2)).replace('.', ',')
                : '0,00'
            }
            disabled={true}
            typeInput="text"
          />
        </div>
        <div className="col-md-1 d-flex align-items-center justify-content-center" id="buttons-product">
          <Tooltip title="Adicionar um produto" placement='top' arrow style={{ right: '60px' }}>
            <i id={`add-product-${id}`} >  <AiOutlinePlusCircle size={25} color='black' style={{ cursor: 'pointer', margin: '20px 5px 0px 5px' }} onClick={() => addProductRow(productRows, setProductRows, props.state, props.setState)} /></i>
          </Tooltip>
          <Tooltip title="Remover um produto" placement='top' arrow style={{ right: '50px' }}>
            <i id={`remove-product-${id}`}> <AiOutlineMinusCircle size={25} color='black' style={{ cursor: 'pointer', margin: '20px 5px 0px 5px' }} onClick={() => removeProductRow(props.state, row._id, productRows, setProductRows, props.setState)} /></i>
          </Tooltip>
        </div>
        <div className="text-center mx-1 my-0"><hr /></div>
      </div>
    ))}
  </>
}