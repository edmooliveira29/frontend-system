import http from '../http-common'

export class EmployeeService {
  async getAll(companyId: any) {
    const params = { companyId: companyId };
    const employeeResponse = (await http.get<any>(`/employee`,{ params }))
    return employeeResponse.data
  }

  async create(data: any) {
    data = {
      ...data,
      createdByTheCompanyId: (JSON.parse(localStorage.getItem('company') as any))._id
    }
    return (await http.post<any>('/employee', data)).data
  }

  async get(objectId: string): Promise<any> {
    const employeeResponse = await (http.get<any>(`/employee?objectId=${objectId}`))
    return employeeResponse.data
  }

  async edit(data: any) {
    return (await http.put<any>(`/employee/${data._id}`, data))
  }

  async delete(objectId: string) {
    return (await http.delete<any>(`/employee/${objectId}`))
  }

}
