import http from '../http-common'

export class EmployeeService {
  async getAll() {
    return (await http.get<any>('/employee')).data
  }
  async create(data: any) {
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
