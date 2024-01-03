import http from '../http-common'

export class CompanyService {
  
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

}
