import { AlertGeneral } from '../../../components'


export const handleCreateProduct = async (props: { ProductService: any, state: any, categoriesDB: any }) => {
  const { ProductService, state, categoriesDB } = props
  const productService = new ProductService()
  const newProduct = {
    ...state,
    category: categoriesDB.data.filter((categoryDB: any) => categoryDB.name === state.category)[0]
  }
  const product = await productService.create(newProduct)
  return product

}
export const handleEditProduct = async (props: { ProductService: any, state: any, editProduct?: boolean, categoriesDB: any }) => {
  const { ProductService, state, editProduct, categoriesDB } = props

  const productService = new ProductService()
  const newProduct = {
    ...state,
    category: categoriesDB.data.filter((categoryDB: any) => categoryDB.name === state.category)[0]
  }
  const product = await productService.edit(newProduct)
  if (editProduct) {
    localStorage.setItem('productLogged', JSON.stringify(product.data))
  }
  return product

}
export const getAllProducts = async (ProductService: any) => {
  const productService = new ProductService()
  try {
    return await productService.getAll()
  } catch (error: any) {
    AlertGeneral({ title: 'Erro', message: error.response.data.message, type: 'error' })
  }
}