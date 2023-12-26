import { AlertGeneral } from '../../../components'


export const handleCreateEmployee = async (props: { EmployeeService: any, state: any, createEmployee?: boolean }) => {
  const { EmployeeService, state, createEmployee } = props
  const employeeService = new EmployeeService()

  const employee = await employeeService.create(state)
  if (createEmployee) {
    localStorage.setItem('employeeLogged', JSON.stringify(employee.data))
  }
  return employee

}
export const handleEditEmployee = async (props: { EmployeeService: any, state: any, editEmployee?: boolean, categoriesDB: any }) => {
  const { EmployeeService, state, editEmployee } = props

  const employeeService = new EmployeeService()
  const employee = await employeeService.edit(state)
  if (editEmployee) {
    localStorage.setItem('employeeLogged', JSON.stringify(employee.data))
  }
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