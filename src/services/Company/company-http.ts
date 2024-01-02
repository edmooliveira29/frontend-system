import http from '../http-common'

export class CompanyService {
  async getAll() {
    return (await http.get<any>('/company')).data
  }
  async create(data: any) {
    return (await http.post<any>('/company', data)).data
  }

  async get(objectId: string): Promise<any> {
    const companyResponse = await (http.get<any>(`/company?objectId=${objectId}`))
    return companyResponse.data
  }

  async edit(data: any) {
    return (await http.put<any>(`/company/${data._id}`, data))
  }

  async login(data: any) {
    return (await (http.post<any>('/login', data))).data
  }

  async delete(objectId: string) {
    return (await http.delete<any>(`/company/${objectId}`))
  }

}
