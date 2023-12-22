import { AlertGeneral } from '../../../components'


export const handleCreateProduct = async (props: { ProductService: any, state: any, createProduct?: boolean, categoriesDB: any }) => {
  const { ProductService, state, createProduct, categoriesDB } = props
  const productService = new ProductService()
  const newProduct = {
    ...state,
    categoryId: categoriesDB.data.filter((category: any) => category.name === state.categoryId)[0]._id
  }
  const product = await productService.create(newProduct)
  if (createProduct) {
    localStorage.setItem('productLogged', JSON.stringify(product.data))
  }
  return product

}
export const handleEditProduct = async (props: { ProductService: any, state: any, editProduct?: boolean, categoriesDB: any }) => {
  const { ProductService, state, editProduct, categoriesDB } = props

  const productService = new ProductService()
  const newProduct = {
    ...state,
    categoryId: categoriesDB.data.filter((category: any) => category.name === state.categoryId)[0]._id
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