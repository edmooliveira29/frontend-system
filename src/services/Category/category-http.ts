import http from '../http-common'

export class CategoryService {
  async getAll() {
    return (await http.get<any>('/category')).data
  }
  async create(data: any) {
    data ={
      ...data,
      createdByTheCompany: (JSON.parse(localStorage.getItem('company') as any))._id
    }
    return (await http.post<any>('/category', data)).data
  }

  async get(objectId: string): Promise<any> {
    const categoryResponse = await (http.get<any>(`/category?objectId=${objectId}`))
    return categoryResponse.data
  }

  async edit(data: any) {
    return (await http.put<any>(`/category/${data._id}`, data))
  }

  async delete(objectId: string) {
    return (await http.delete<any>(`/category/${objectId}`))
  }

}
