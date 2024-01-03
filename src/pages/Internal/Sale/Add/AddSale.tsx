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
import { formatNowDate } from '../../../../utils/date'

export const AddSale = (props: { state: any }) => {
  const [customers, setCustomers] = useState<any>([])
  const [customersDB, setCustomersDB] = useState<any>([])
  const [products, setProducts] = useState<any>([])
  const [productsDB, setProductsDB] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const { objectToEdit } = useSelector((reducers: any) => reducers.objectReducer)
  const hasObjectToEdit = objectToEdit !== undefined
  let newObjectToEdit: any = {
    products: []
  }
  if (hasObjectToEdit) {
    for (const index in objectToEdit.products) {
      newObjectToEdit.products.push({
        [`productId-${index}`]: objectToEdit.products[index][`productId-${index}`].name,
        [`quantity-${index}`]: objectToEdit.products[index][`quantity-${index}`],
        [`unitValue-${index}`]: objectToEdit.products[index][`unitValue-${index}`],
        [`subTotal-${index}`]: objectToEdit.products[index][`subTotal-${index}`]
      })
    }
    newObjectToEdit = {
      ...objectToEdit,
      products: newObjectToEdit.products,
      customer: objectToEdit.customer.name,
    }
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [state, setState] = useState<any>(
    hasObjectToEdit ? newObjectToEdit : {
      customer: '',
      dateOfSale: props.state?.dateOfSale || formatNowDate(),
      formOfPayment: [],
      products: [{ 'productId-0': '', 'quantity-0': '', 'unitValue-0': '', 'subTotal-0': '' }],
      description: '',
      discount: '',
      typeOfDiscount: false,
      informationAboutTheSale: '',
      resumeOfSale: {
        totalAmount: '',
        valueDiscount: '',
        totalOfSale: ''
      }
    })
  const [resumeOfSale, setResumeOfSale] = useState({
    totalAmount: '',
    valueDiscount: '',
    totalOfSale: ''
  })
  useEffect(() => {
    setResumeOfSale({
      totalAmount: calculateTotalAmount(),
      valueDiscount: state.discount,
      totalOfSale: String((Number(calculateTotalAmount().replace(',', '.')) - Number((state.valueDiscount || '0,00').replace(',', '.'))).toFixed(2)).replace('.', ',')
    })
  }, [state])
  const handleSave = async (resumeOfSale: any) => {
    const { dateOfSale, customer, products, formOfPayment } = state
    const translations = {
      dateOfSale: 'Data da Venda',
      customer: 'Cliente',
      products: 'Produtos',
      formOfPayment: 'Forma de Pagamento',
    }
    if (!validateFields({ dateOfSale, customer, products, formOfPayment }, translations)) {
      return false
    }
    let response
    state.customer = customersDB.find((customer: any) => (customer.name).toUpperCase() === (state.customer).toUpperCase())

    for (const index in state.products) {
      state.products[index][`productId-${index}`] = productsDB.find((product: any) => (product.name).toUpperCase() === ((state.products[index][`productId-${index}`]).toUpperCase()))
    }
    state.resumeOfSale = resumeOfSale
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
      const customerResponse = await new CustomerService().getAll(JSON.parse(localStorage.getItem('company') as any)._id)
      setCustomersDB(customerResponse.data)
      setCustomers((customerResponse.data.map((customer: any) => ({ value: customer.name, label: customer.name }))))
    }

    const getAllProducts = async () => {
      const productsResponse = await new ProductService().getAll(JSON.parse(localStorage.getItem('company') as any)._id)
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
                id={'customer'}
                required={true}
                label='Cliente'
                value={state.customer}
                options={customers}
                placeholder='Selecione um cliente'
                onChange={(event: any) => { setState({ ...state, customer: event.target.value }) }}
              />
            </div>
            {!hasObjectToEdit ? <div className="col-1 d-flex align-items-center justify-content-center p-0" style={{ top: '15px', position: 'relative' }}>
              <ModalAdd setData={setCustomers} data={customersDB} setDataDB={setCustomersDB} titleOfModel={'cliente'} id={'add-new-customer'} />
            </div> : null}
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
        <ProductsInSale hasObjectToEdit={hasObjectToEdit} state={state} calculateTotalAmount={calculateTotalAmount} setState={setState} products={products} setProducts={setProducts} setProductsDB={setProductsDB} productsDB={productsDB} />
      </div>
      <PaymentConditions state={state} setState={setState} calculateTotalAmount={calculateTotalAmount} />
      <div className='row py-2 m-0'>
        <label id={`label - input`}>Observações sobre a venda</label>
        <TextAreaInput onChange={(event: any) => { setState({ ...state, informationAboutTheSale: event.target.value }) }} />
      </div>
      <FooterSale state={state} calculateTotalAmount={calculateTotalAmount} handleSave={() => handleSave(resumeOfSale)} loading={loading} />
    </div >
  </>
  )
}