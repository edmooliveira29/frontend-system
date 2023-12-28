/* eslint-disable max-lines */
import React, { useEffect, useState } from 'react'
import '../styles.sass'
import { AlertConfirmationSaveEdit, DataFieldInput, SelectFieldInput, TextAreaInput, TextFieldInput } from '../../../../components'
import { validateFields } from '../../../../utils'
import { FooterSale } from './FooterSale'
import { SaleService } from '../../../../services/Sale'
import { ProductsInSale } from './ProductsInSale/ProductsInSale'
import { PaymentConditions } from './PaymentConditions'
import { ModalAdd } from '../../../../components/modal/ModalAdd'
import { handleCreateSale, handleEditSale } from '../handle'
import { ActionsTypes } from '../../../../redux/actions/reducers'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CustomerService } from '../../../../services/Customer'
import { ProductService } from '../../../../services/Product'

export const AddSale: React.FC<{ state?: any}> = (props) => {
  const [customers, setCustomers] = useState<any>([])
  const [customersDB, setCustomersDB] = useState<any>([])
  const [products, setProducts] = useState<any>([])
  const [productsDB, setProductsDB] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const { objectToEdit } = useSelector((reducers: any) => reducers.objectReducer)
  const hasObjectToEdit = objectToEdit !== undefined
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const [state, setState] = useState<any>(
    hasObjectToEdit ? objectToEdit : {
      customerId: '',
      dateOfSale: props.state?.dateOfSale || new Date().toLocaleString('pt-BR'),
      formOfPayment: [],
      products: [{ 'productId-0': '', 'quantity-0': '', 'unitValue-0': '', 'subTotal-0': '' }],
      saleTotalAmount: 0,
      description: '',
      discount: '',
      valueDiscount: '',
      typeOfDiscount: false,
      informationAboutTheSale: ''
    })

  const handleSave = async (customersDB: any, productsDB: any) => {
    const { dateOfSale, customerId, products, formOfPayment } = state
    const translations = {
      dateOfSale: 'Data da Venda',
      customerId: 'Cliente',
      products: 'Produtos',
      formOfPayment: 'Forma de Pagamento',
    }
    if (!validateFields({ dateOfSale, customerId, products, formOfPayment }, translations)) {
      return false
    }
    let response
    state.customerId = customersDB.find((customer: any) => (customer.name).toUpperCase() === (state.customerId).toUpperCase())._id

    for (const index in state.products) {
      state.products[index][`productId-${index}`] = productsDB.find((product: any) => (product.name).toUpperCase() === ((state.products[index][`productId-${index}`]).toUpperCase()))._id
    }

    if (hasObjectToEdit) {
      response = await AlertConfirmationSaveEdit('edit', handleEditSale, { setLoading, SaleService, state })
    } else {
      response = await AlertConfirmationSaveEdit('save', handleCreateSale, { setLoading, SaleService, state })
    }
    setLoading(false)
    if (response) {
      dispatch({ type: ActionsTypes.OBJECT_EDIT, payload: undefined })
      navigate('/vendas')
    }
  }

  useEffect(() => {
    const getAllCustomers = async () => {
      const customerResponse = await new CustomerService().getAll()
      setCustomersDB(customerResponse.data)
      console.log((customerResponse.data.map((customer: any) => ({ value: customer.name, label: customer.name }))))
      setCustomers((customerResponse.data.map((customer: any) => ({ value: customer.name, label: customer.name }))))
    }

    const getAllProducts = async () => {
      const productsResponse = await new ProductService().getAll()
      setProductsDB(productsResponse.data)
      setProducts(productsResponse.data.map((product: any) => ({ value: product.name, label: product.name })))
    }
    getAllProducts()
    getAllCustomers()
  }, [])

  const calculateTotalAmount = () => {
    let totalAmount = 0
    state.products.forEach((_product: any, id: number) => {
      const subTotalField = `subTotal-${id}`
      const subTotalValue = state.products[id]?.[subTotalField]
      if (subTotalValue) {
        totalAmount += parseFloat(subTotalValue.replace(',', '.'))
      }
    })

    return String(totalAmount.toFixed(2)).replace('.', ',')
  }
  return (<>
    <div className="row border border-secondary rounded" id="div-list-customer">
      <div className="col-sm-12 col-md-9 p-0 border-secondary">
        <h4 className="col-12" id="title-natural-person">ADICIONAR VENDA</h4>
      </div>
      <div className="row m-0">
        <div className="col-md-3 col-sm-12">
          <DataFieldInput
            id={'dateOfSale'}
            label='Data da Venda'
            required={true}
            value={state.dateOfSale}
            onChange={(value: string) => { setState({ ...state, dateOfSale: value }) }} />
        </div>
        <div className="col-md-5 col-sm-12">
          <div className="row">
            <div className="col-11">
              <SelectFieldInput
                id={'customerId'}
                required={true}
                label='Cliente'
                value={state.customerId}
                options={customers}
                placeholder='Selecione um cliente'
                onChange={(event: any) => { setState({ ...state, customerId: event.target.value }) }}
              />
            </div>
            <div className="col-1 d-flex align-items-center justify-content-center p-0" style={{ top: '15px', position: 'relative' }}>
              <ModalAdd setData={setCustomers} data={customersDB} setDataDB={setCustomersDB} titleOfModel={'cliente'} id={'add-new-customer'} />
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <TextFieldInput
            id={'description'}
            label="Descrição"
            placeholder='Descrição da venda'
            required={false}
            value={state.description}
            typeInput="text"
            onChange={(value: string) => {
              setState({ ...state, description: value })
            }}
          />
        </div>

      </div>
      <div style={{ borderTop: '1px solid #E0E0E0', borderBottom: '1px solid #E0E0E0', margin: '0px 0px' }}>
        <ProductsInSale state={state} calculateTotalAmount={calculateTotalAmount} setState={setState} products={products} setProducts={setProducts} setProductsDB={setProductsDB} productsDB={productsDB} />
      </div>
      <PaymentConditions state={state} setState={setState} calculateTotalAmount={calculateTotalAmount} />
      <div className='row py-2 m-0'>
        <label id={`label - input`}>Observações sobre a venda</label>
        <TextAreaInput onChange={(event: any) => { setState({ ...state, informationAboutTheSale: event.target.value }) }} />
      </div>
      <FooterSale state={state} calculateTotalAmount={calculateTotalAmount} handleSave={()=>handleSave(customersDB, productsDB)} loading={loading} />
    </div >

  </>
  )
}