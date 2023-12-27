import { Masks } from '../../../../../utils'

export const addProductRow = (productRows: any[], setProductRows: any, state: any, setState: any) => {
  const newRow = { _id: productRows.length }
  setState((prevState: any) => ({
    ...prevState,
    products: [
      ...prevState.products,
      {
        [`product-${newRow._id}`]: '',
        [`quantity-${newRow._id}`]: '',
        [`unitValue-${newRow._id}`]: '',
        [`subTotal-${newRow._id}`]: ''
      }

    ]
  }))
  setProductRows([...productRows, newRow])
}

export const removeProductRow = (state: any, id: any, productRows: any[], setProductRows: any, setState: any) => {
  if (productRows.length > 1) {
    const updatedProductRows = productRows.filter((row) => row._id !== id).map((row, index) => ({ ...row, _id: index }))

    const updatedProducts = state.products.filter((_: any, index: any) => index !== id)
    const updatedProductsWithRenamedFields = updatedProducts.map((product: any) => {
      const updatedProduct: any = {}
      Object.keys(product).forEach((key) => {
        const matches = key.match(/^(.*?)_(\d+)$/)
        if (matches) {
          const fieldName = matches[1]
          const fieldIndex = matches[2]
          if (fieldIndex > id) {
            updatedProduct[`${fieldName}-${Number(fieldIndex) - 1}`] = product[key]
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

export const updateProduct = (state: any, setState: any, calculateTotalAmount: any, productId: number, field: string, value: string, productsDB: any, updatedManually: boolean) => {
  const mask = new Masks()

  const updatedProduct = {
    ...state.products[productId],
    [field]: value,
  }
  const updatedProducts = [...state.products]
  updatedProducts[productId] = updatedProduct
  updatedProducts.forEach((product, id) => {
    
    product[`unitValue-${id}`] = updatedManually ? mask.maskMoney(product[`unitValue-${id}`]) : productsDB.find((productDB: any) => productDB.name === product[`product-${id}`]).price
    product[`quantity-${id}`] = product[`quantity-${id}`] || '1'
    const quantityField = `quantity-${id}`
    const unitValueField = `unitValue-${id}`
    product[unitValueField] = product[unitValueField].replace("R$ ", "").replace('.','')
    const newSubTotal = calculateSubTotal(product[quantityField], product[unitValueField])
    product[`subTotal-${id}`] = (newSubTotal)
  })

  setState({
    ...state,
    products: updatedProducts,
    saleTotalAmount: calculateTotalAmount(),
  })
}


export const calculateSubTotal = (quantity: string, unitValue: string) => {
  unitValue.length > 7 ? unitValue = unitValue.replace('.', '') : unitValue
  const quantityValue = parseFloat(String(quantity || '0').replace(',', '.'))
  const unitValueFloat = parseFloat(String(unitValue || '0').replace(',', '.'))
  return (quantityValue * unitValueFloat).toFixed(2).replace('.', ',')
}

export const calculateTotalAmount = (state: any) => {
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