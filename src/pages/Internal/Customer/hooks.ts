import { validateFields } from '../../../utils'

export const handleSaveCustomer = async (typeCustomerModal: string, state: any) => {
  if (typeCustomerModal == 'natural') {
    const { name, cpf, gender, nickname, phoneNumber, email, zipCode, address, houseNumber, neighborhood, stateOfTheCountry, city } = state
    const translations = {
      name: 'Nome',
      cpf: 'CPF',
      gender: 'Gênero',
      nickname: 'Chama-me',
      phoneNumber: 'Telefone',
      email: 'Email',
      zipCode: 'CEP',
      address: 'Endereço',
      houseNumber: 'Número',
      neighborhood: 'Bairro',
      stateOfTheCountry: 'Estado',
      city: 'Cidade'
    }
    if (!validateFields({ name, cpf, gender, nickname, phoneNumber, email, zipCode, address, houseNumber, neighborhood, stateOfTheCountry, city }, translations)) {
      return false
    }
    alert('Em fase de construção!')

  } else if (typeCustomerModal == 'juristic') {
    const { name, cnpj, legalResponsible, phoneNumber, email, zipCode, address, houseNumber, neighborhood, stateOfTheCountry, city } = state
    const translations = {
      name: 'Nome Empresarial',
      cnpj: 'CNPJ',
      legalResponsible: 'Responsável Legal',
      phoneNumber: 'Telefone',
      email: 'Email',
      zipCode: 'CEP',
      address: 'Endereço',
      houseNumber: 'Número',
      neighborhood: 'Bairro',
      stateOfTheCountry: 'Estado',
      city: 'Cidade',
    }
    if (!validateFields({ name, cnpj, legalResponsible, phoneNumber, email, zipCode, address, houseNumber, neighborhood, stateOfTheCountry, city }, translations)) {
      return false
    }
    alert('Em fase de construção!')
  }

}