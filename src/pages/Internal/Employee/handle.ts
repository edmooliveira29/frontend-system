import { AlertGeneral } from '../../../components'

export const handleCreateEmployee = async (props: { EmployeeService: any, state: any }) => {
  const { EmployeeService, state } = props
  const employeeService = new EmployeeService()
  const employee = await employeeService.create(state)
  return employee

}
export const handleEditEmployee = async (props: { EmployeeService: any, state: any }) => {
  const { EmployeeService, state } = props

  const employeeService = new EmployeeService()
  const employee = await employeeService.edit(state)
  return employee

}
export const getAllEmployees = async (EmployeeService: any) => {
  const employeeService = new EmployeeService()
  try {
    return await employeeService.getAll()
  } catch (error: any) {
    AlertGeneral({ title: 'Erro', message: error.response.data.message, type: 'error' })
  }
}