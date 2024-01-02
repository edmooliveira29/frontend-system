import http from '../http-common'

export class SaleService {
  async getAll() {
    return (await http.get<any>('/sale')).data
  }
  async create(data: any) {
    data = {
      ...data,
      createdByTheCompanyId: (JSON.parse(localStorage.getItem('company') as any))._id
    }
    return (await http.post<any>('/sale', data)).data
  }

  async get(objectId: string): Promise<any> {
    const saleResponse = await (http.get<any>(`/sale?objectId=${objectId}`))
    return saleResponse.data
  }

  async edit(data: any) {
    return (await http.put<any>(`/sale/${data._id}`, data))
  }

  async delete(objectId: string) {
    return (await http.delete<any>(`/sale/${objectId}`))
  }

}
