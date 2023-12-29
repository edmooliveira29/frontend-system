import http from '../http-common'

export class CustomerService {
  async getAll() {
    return (await http.get<any>('/customer')).data
  }
  async create(data: any) {
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
    return (await http.delete<any>(`/customer/${objectId}`)).data
  }

}
