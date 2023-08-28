export const addProductRow = (productRows: any[], setProductRows: any, state: any, setState: any) => {
  const newRow = { id: productRows.length }
  setState((prevState: any) => ({
    ...prevState,
    products: [
      ...prevState.products,
      {
        [`product-${newRow.id}`]: '',
        [`quantity-${newRow.id}`]: '',
        [`unitValue-${newRow.id}`]: '',
        [`subTotal-${newRow.id}`]: ''
      }

    ]
  }))
  setProductRows([...productRows, newRow])
}

export const removeProductRow = (state: any, id: any, productRows: any[], setProductRows: any, setState: any) => {
  if (productRows.length > 1) {
    const updatedProductRows = productRows.filter((row) => row.id !== id).map((row, index) => ({ ...row, id: index }))

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

export const updateProduct = (state: any, setState: any, calculateTotalAmount: any, productId: number, field: string, value: string) => {
  const updatedProduct = {
    ...state.products[productId],
    [field]: value,
  }

  const updatedProducts = [...state.products]
  updatedProducts[productId] = updatedProduct
  updatedProducts.forEach((product, id) => {
    const quantityField = `quantity-${id}`
    const unitValueField = `unitValue-${id}`
    const newSubTotal = calculateSubTotal(product[quantityField], product[unitValueField])
    product[`subTotal-${id}`] = newSubTotal
  })

  setState({
    ...state,
    products: updatedProducts,
    saleTotalAmount: calculateTotalAmount(),
  })
}


export const calculateSubTotal = (quantity: string, unitValue: string) => {
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