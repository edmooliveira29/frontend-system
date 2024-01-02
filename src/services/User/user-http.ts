import http from '../http-common'

export class UserService {
  async getAll() {
    return (await http.get<any>('/user')).data
  }
  async create(data: any) {
    return (await http.post<any>('/user', data)).data
  }

  async get(objectId: string): Promise<any> {

    const userResponse = await (http.get<any>(`/user?objectId=${objectId}`))
    return userResponse.data
  }

  async edit(data: any) {
    return (await http.put<any>(`/user/${data._id}`, data))
  }

  async login(data: any) {
    return (await (http.post<any>('/login', data))).data
  }

  async delete(objectId: string) {
    return (await http.delete<any>(`/user/${objectId}`))
  }

}
