import http from '../http-common'

export class UserService {
  async create(data: any) {
    return (await http.post<any>('/user', data)).data
  }

  async get(objectId: string): Promise<any> {
    const userResponse = await (http.get<any>(`/user?objectId=${objectId}`))
    return userResponse.data
  }
  async put() {
    //return (await http.put<any>(`/user/${data._id}`, data))
    alert('Conexão com o Banco de dados em construção!')
  }

  async login(data: any) {
    return (await (http.post<any>('/login', data))).data
  }

}
