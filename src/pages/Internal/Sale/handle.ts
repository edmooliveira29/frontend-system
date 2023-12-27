import { AlertGeneral } from '../../../components'

export const handleCreateSale = async (props: { SaleService: any, state: any }) => {
  console.log(props.state)
  const { SaleService, state } = props
  const saleService = new SaleService()
  const sale = await saleService.create(state)
  return sale

}
export const handleEditSale = async (props: { SaleService: any, state: any }) => {
  const { SaleService, state } = props

  const saleService = new SaleService()
  const sale = await saleService.edit(state)
  return sale

}
export const getAllSales = async (SaleService: any) => {
  const saleService = new SaleService()
  try {
    return await saleService.getAll()
  } catch (error: any) {
    AlertGeneral({ title: 'Erro', message: error.response.data.message, type: 'error' })
  }
}