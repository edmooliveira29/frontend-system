import http from '../http-common'

export class CustomerService {
  async getAll(companyId: any) {
    const params = { companyId: companyId }
    const customerResponse = (await http.get<any>(`/customer`, { params }))
    return customerResponse.data
  }
  async create(data: any) {
    data = {
      ...data,
      createdByTheCompanyId: (JSON.parse(localStorage.getItem('company') as any))._id
    }
    return (await http.post<any>('/customer', data)).data
  }

  async get(objectId: string): Promise<any> {
    const customerResponse = await (http.get<any>(`/customer?objectId=${objectId}`))
    return customerResponse.data
  }

  async edit(data: any) {
    return (await http.put<any>(`/customer/${data._id}`, data))
  }

  async delete(objectId: string) {
    return await (http.delete<any>(`/customer/${objectId}`))
  }
}