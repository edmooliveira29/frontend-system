/* eslint-disable max-lines */
import React, { useEffect, useState } from 'react'
import './styles.sass'
import { fakerPT_BR } from '@faker-js/faker'
import { ComponentButtonCommon, DataFieldInput, MultiSelectFieldInput, SelectFieldInput, SwitchInput, TextAreaInput, TextFieldInput } from '../../../components'
import { AiFillCloseCircle, AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { Box, Modal, Tooltip } from '@mui/material'
import { AddCustomer } from '../Customer'
import { Masks } from '../../../utils'

export const AddSale = () => {

  const [openModal, setOpenModal] = React.useState(false)
  const [customers, setCustumers] = useState<any>()
  const [state, setState] = useState<any>({
    customer: '',
    dateOfSale: null,
    formOfPayment: [],
    products: [],
    saleTotalAmount: 0
  })
  const [productRows, setProductRows] = useState([{ id: 0 }])
  const masks = new Masks()
  const addProductRow = () => {
    const newRow = { id: productRows.length }
    setProductRows([...productRows, newRow])

  }

  const removeProductRow = (id: any) => {
    if (productRows.length > 1) {
      const updatedProductRows = productRows.filter((row) => row.id !== id).map((row, index) => ({ ...row, id: index }))

      const updatedProducts = state.products.filter((_: any, index: any) => index !== id)
      const updatedProductsWithRenamedFields = updatedProducts.map((product: any, index: number) => {
        const updatedProduct: any = {}
        Object.keys(product).forEach((key) => {
          const matches = key.match(/^(.*?)_(\d+)$/)
          if (matches) {
            const fieldName = matches[1]
            const fieldIndex = matches[2]
            if (fieldIndex > id) {
              updatedProduct[`${fieldName}_${Number(fieldIndex) - 1}`] = product[key]
            } else {
              updatedProduct[key] = product[key]
            }
          } else {
            updatedProduct[key] = product[key]
          }
        })
        return updatedProduct
      })

      setState({
        ...state,
        products: updatedProductsWithRenamedFields,
      })

      setProductRows(updatedProductRows)
    }
  }


  const handleSave = async () => {
    alert('Em fase de construção!')
  }

  useEffect(() => {
    const peopleList = []
    for (let i = 0; i < 50; i++) {
      const name = fakerPT_BR.person.fullName()
      peopleList.push({
        value: `objectId${i}`,
        label: name,
      })
    }
    setCustumers(peopleList)
  }, [])

  // useEffect(() => {

  //   console.log('')

  // }, [state])

  const updateProduct = (productId: number, field: string, value: string) => {
    const updatedProduct = {
      ...state.products[productId],
      [field]: value,
    }

    const updatedProducts = [...state.products]
    updatedProducts[productId] = updatedProduct

    // Update the subtotals for all products
    updatedProducts.forEach((product, id) => {
      const quantityField = `quantity_${id}`
      const unitValueField = `unitValue_${id}`
      const newSubTotal = calculateSubTotal(product[quantityField], product[unitValueField])
      product[`subTotal_${id}`] = newSubTotal
    })

    setState({
      ...state,
      products: updatedProducts,
      saleTotalAmount: calculateTotalAmount(),
    })
  }


  const calculateSubTotal = (quantity: string, unitValue: string) => {
    const quantityValue = parseFloat(String(quantity || '0').replace(',', '.'))
    const unitValueFloat = parseFloat(String(unitValue || '0').replace(',', '.'))
    return (quantityValue * unitValueFloat).toFixed(2).replace('.', ',')
  }

  const calculateTotalAmount = () => {
    let totalAmount = 0
    state.products.forEach((_product: any, id: number) => {
      const subTotalField = `subTotal_${id}`
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
          <DataFieldInput label='Data da Venda' value={state.dateOfSale} onChange={(value: string) => { setState({ ...state, date: value }) }} />
        </div>
        <div className="col-md-5 col-sm-12">
          <div className="row">
            <div className="col-10">
              <SelectFieldInput
                required={true}
                label='Cliente'
                value={state.customer}
                options={customers}
                placeholder='Selecione um cliente'
                onChange={(event: any) => { setState({ ...state, customer: event.target.value }) }}
              />
            </div>
            <div className="col-2 d-flex align-items-center justify-content-center p-0" style={{ top: '15px', position: 'relative' }}>
              <Tooltip title="Adicionar um cliente" placement='top' arrow sx={{ right: '50px' }}>
                <i> <AiOutlinePlusCircle size={25} color='black' style={{ cursor: 'pointer', marginRight: '20px' }} onClick={() => setOpenModal(true)} /> </i>
              </Tooltip>
              <Modal
                open={openModal}
                onClose={() => { setOpenModal(false) }}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                style={{ zIndex: 1000 }}
              >
                <Box sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  bgcolor: 'background.paper',
                  border: '2px solid #000',
                  boxShadow: 24,
                  pt: 1,
                  px: 2,
                  pb: 2,
                  borderRadius: '5px',
                  maxWidth: '90%',
                  width: '100%',
                  // minHeight: '70%',
                  //height: '85%'
                }}>

                  <div className="d-flex justify-content-end" style={{ cursor: 'pointer' }} >
                    <Tooltip title="Fechar sem salvar" placement='left' arrow>
                      <i><AiFillCloseCircle className="align-self-end" size={20} color='#FF0000' onClick={() => { setOpenModal(false) }} /></i>
                    </Tooltip>
                  </div>
                  <div className="row d-flex align-items-center justify-content-center" style={{ maxHeight: 'calc(90vh - 150px)', overflowY: 'auto', overflowX: 'hidden' }}>
                    {<AddCustomer />}
                  </div>
                </Box>

              </Modal>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <TextFieldInput
            label="Descrição"
            placeholder='Descrição da venda'
            required={true}
            value={state.description}
            typeInput="text"
            onChange={(value: string) => {
              setState({ ...state, description: value })
            }}
          />
        </div>

      </div>
      <div style={{ borderTop: '1px solid #E0E0E0', borderBottom: '1px solid #E0E0E0', margin: '10px 0px' }}>

        <h6 className="col-sm-12 m-2" id="products-sale-title">PRODUTOS</h6>
        {productRows.map((row, id) => (
          <div key={`list-${id}`} className="row px-3 m-0">
            <div className="col-md-1 " id="item">
              <TextFieldInput
                label="Item"
                placeholder=''
                required={false}
                disabled={true}
                value={String(row.id + 1)}
                typeInput="number"
              />
            </div>
            <div className="col-md-4" id="product">
              <SelectFieldInput
                required={true}
                label='Produto'
                value={state.products[id]?.[`name_${id}`] || ''}
                options={[]}
                placeholder='Selecione um produto'
                onChange={(event: any) => updateProduct(id, `name_${id}`, event.target.value)}
              />
            </div>
            <div className="col-md-2" id="quantity">
              <TextFieldInput
                label="Quantidade"
                placeholder="Quantidade de produtos"
                required={true}
                value={state.products[id]?.[`quantity_${id}`] || ''}
                typeInput="number"
                onChange={(value: string) => { updateProduct(id, `quantity_${id}`, value) }}
              />
            </div>
            <div className="col-md-2" id="unit-value">
              <TextFieldInput
                label="Valor Unitário"
                placeholder='Valor unitário do produto'
                required={true}
                value={state.products[id]?.[`unitValue_${id}`] || ''}
                typeInput="text"
                onChange={(value: string) => updateProduct(id, `unitValue_${id}`, masks.maskMoney(value))}
              />
            </div>
            <div className="col-md-2" id="subtotal">
              <TextFieldInput
                label="Subtotal"
                placeholder='R$0,00'
                required={true}
                value={
                  state.products[id]?.[`quantity_${id}`] && state.products[id]?.[`unitValue_${id}`] ?
                    String((Number(state.products[id]?.[`quantity_${id}`]) * Number((state.products[id]?.[`unitValue_${id}`].replace(',', '.')))).toFixed(2)).replace('.', ',')
                    : '0,00'
                }
                disabled={true}
                typeInput="text"
              />
            </div>
            <div className="col-md-1 d-flex align-items-center justify-content-center" id="buttons-product">
              <Tooltip title="Adicionar um produto" placement='top' arrow sx={{ right: '60px' }}>
                <i>  <AiOutlinePlusCircle size={25} color='black' style={{ cursor: 'pointer', margin: '20px 5px 0px 5px' }} onClick={addProductRow} /></i>
              </Tooltip>
              <Tooltip title="Remover um produto" placement='top' arrow sx={{ right: '50px' }}>
                <i> <AiOutlineMinusCircle size={25} color='black' style={{ cursor: 'pointer', margin: '20px 5px 0px 5px' }} onClick={() => removeProductRow(row.id)} /></i>
              </Tooltip>
            </div>
            <div className="text-center mx-1 my-0"><hr /></div>
          </div>
        ))}
      </div>
      <div className='row'>
        <h6 className="col-sm-12 m-2" id="products-sale-title">CONDIÇÕES DE PAGAMENTO</h6>
        <div className="col-md-3 col-sm-3">
          <MultiSelectFieldInput
            value={state.formOfPayment || []}
            onChange={(event: any) => {
              setState({
                ...state,
                formOfPayment: typeof event.target.value === 'string' ? event.value.split(',') : event.target.value
              })
            }}
            options={['Boleto', 'Cartão de Crédito', 'Transferência Bancária', 'Pix', 'Dinheiro', 'Cheque']} label='Meio de Pagamento' required={true}
          />
        </div>
        <div className="col-md-3 col-sm-3 d-flex align-items-center justify-content-center">
          <SwitchInput
            labelTitle='Tipo de Desconto:&nbsp;&nbsp;'
            label1='R$'
            label2='%'
            value={state.typeOfDiscount}
            onChange={(event: any) => { setState({ ...state, typeOfDiscount: !event.target.checked }) }}
          />
        </div>
        <div className="col-md-3 col-sm-3">
          <TextFieldInput
            label={`Desconto em ${state.typeOfDiscount || state.typeOfDiscount == undefined ? 'R$' : '%'}`}
            placeholder={state.typeOfDiscount || state.typeOfDiscount == undefined ? 'Desconto R$' : 'Desconto em %'}
            required={false}
            value={state.discount}
            typeInput={state.typeOfDiscount || state.typeOfDiscount == undefined ? "text" : 'number'}
            onChange={(value: string) => {
              setState({
                ...state,
                discount: state.typeOfDiscount || state.typeOfDiscount == undefined ? masks.maskMoney(value) : value,
                valueDiscount: state.typeOfDiscount || state.typeOfDiscount == undefined ? masks.maskMoney(value) : String((Number(calculateTotalAmount().replace(',', '.')) * (Number(value.replace(',', '.'))/100)).toFixed(2)).replace('.',',')
              })
            }} />
        </div>
        <div className="col-md-3 col-sm-3">
          <TextFieldInput
            label="Valor do desconto em R$"
            placeholder={'R$ 0,00 '}
            required={false}
            disabled={true}
            value={state.valueDiscount}
            typeInput="text"
          />
        </div>
      </div>

      <div className='row py-2'>
        <label id={`label - input`}>Observações sobre a venda</label>

        <TextAreaInput></TextAreaInput>
      </div>

      <div className="mt-auto">
        <div id="div-footer-sale" className="row d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
          <div className="col-md-3 d-flex align-items-center h5 p-1" style={{ color: 'blue' }}>
            <strong>Valor em produtos:&nbsp;</strong>
            R$ {calculateTotalAmount()}
          </div>
          <div className="col-md-3 d-flex align-items-center h5 p-1" style={{ color: 'red' }}>
            <strong>Descontos:&nbsp;</strong>
            R$ {state.valueDiscount || '0,00'}
          </div>
          <div className="col-md-3 d-flex align-items-center h3 p-1" style={{ color: 'green' }}>
            <strong>Valor total:&nbsp;</strong> R$ {String((Number(calculateTotalAmount().replace(',', '.'))- Number((state.valueDiscount).replace(',','.'))).toFixed(2)).replace('.',',')}
          </div>
          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <ComponentButtonCommon text='Salvar' onClick={handleSave} />
          </div>
        </div>
      </div>
    </div >

  </>
  )
}