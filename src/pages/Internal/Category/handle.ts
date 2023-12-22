import { AlertGeneral } from '../../../components'


export const handleCreateCategory = async (props: { CategoryService: any, state: any, createCategory?: boolean }) => {
  const { CategoryService, state, createCategory } = props
  const categoryService = new CategoryService()

  const category = await categoryService.create(state)
  if (createCategory) {
    localStorage.setItem('categoryLogged', JSON.stringify(category.data))
  }
  return category

}
export const handleEditCategory = async (props: { CategoryService: any, state: any, editCategory?: boolean }) => {
  const { CategoryService, state, editCategory } = props

  const categoryService = new CategoryService()

  const category = await categoryService.edit(state)
  if (editCategory) {
    localStorage.setItem('categoryLogged', JSON.stringify(category.data))
  }
  return category

}
export const getAllCategorys = async (CategoryService: any) => {
  const categoryService = new CategoryService()
  try {
    return await categoryService.getAll()
  } catch (error: any) {
    AlertGeneral({ title: 'Erro', message: error.response.data.message, type: 'error' })
  }
}