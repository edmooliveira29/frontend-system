import http from '../http-common'

export class UserService {
  async create(data: any) {
    return (await http.post<any>('/user', data)).data
  }

  async login(data: any) {
    return (await (http.post<any>('/login', data))).data
  }

  async get() {
    //(await (http.get<any>('/user'))).data
    return {
      address: "Av. Paulista, 1234",
      //actualyPassword: "senhaAtual123",
      birthday: new Date("02-28-2022").toISOString(),
      city: "São Paulo",
      //complement: "Apto 456",
      cpf: "123.456.789-00",
      email: "exemplo@email.com",
      //gender: "male",
      //houseNumber: "123",
      name: "Fulano da Silva",
      //neighborhood: "Bela Vista",
      //newPassword: "novaSenha456",
      //newPasswordAgain: "novaSenha456",
      //nickname: "Fulano",
      //phoneNumber: "(11) 98765-4321",
      state: "sp",
      zipCode: "01310-200"

    }

  }
}
