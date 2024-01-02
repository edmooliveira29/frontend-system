import http from '../http-common'

export class CategoryService {
  async getAll(companyId: any) {
    const params = { companyId: companyId };
    const categoryResponse = (await http.get<any>(`/category`,{ params }))
    return categoryResponse.data
  }
  async create(data: any) {
    data = {
      ...data,
      createdByTheCompanyId: (JSON.parse(localStorage.getItem('company') as any))._id
    }
    return (await http.post<any>('/category', data)).data
  }

  async get(data: any): Promise<any> {
    const categoryResponse = await ((await http.get<any>(`/category`, { params: data })))
    return categoryResponse.data
  }

  async edit(data: any) {
    return (await http.put<any>(`/category/${data._id}`, data))
  }

  async delete(objectId: string) {
    return (await http.delete<any>(`/category/${objectId}`))
  }

}
