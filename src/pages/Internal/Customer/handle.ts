import { AlertGeneral } from '../../../components'


export const handleCreateCustomer = async (props: { CustomerService: any, state: any, createCustomer?: boolean }) => {
  const { CustomerService, state } = props
  const customerService = new CustomerService()

  const customer = await customerService.create(state)

  return customer

}
export const handleEditCustomer = async (props: { CustomerService: any, state: any }) => {
  const { CustomerService, state } = props
  const customerService = new CustomerService()
  const customer = await customerService.edit(state)

  return customer

}
export const getAllCustomers = async (CustomerService: any) => {
  const customerService = new CustomerService()
  try {
    return await customerService.getAll()
  } catch (error: any) {
    AlertGeneral({ title: 'Erro', message: error.response.data.message, type: 'error' })
  }
}