import http from '../http-common'

export class ProductService {
  async getAll() {
    return (await http.get<any>('/product')).data
  }
  async create(data: any) {
    data = {
      ...data,
      createdByTheCompanyId: (JSON.parse(localStorage.getItem('company') as any))._id
    }
    return (await http.post<any>('/product', data)).data
  }

  async get(objectId: string): Promise<any> {
    const productResponse = await (http.get<any>(`/product?objectId=${objectId}`))
    return productResponse.data
  }

  async edit(data: any) {
    return (await http.put<any>(`/product/${data._id}`, data))
  }

  async delete(objectId: string) {
    return (await http.delete<any>(`/product/${objectId}`))
  }

}
