import { validateFields } from '../../../utils'

export const handleSaveCustomer = async (typeCustomerModal: string, state: any) => {
  if (typeCustomerModal == 'natural') {
    const { name, cpf, gender, phoneNumber, email, zipCode, street, houseNumber, neighborhood, stateOfTheCountry, city } = state
    const translations = {
      name: 'Nome',
      cpf: 'CPF',
      gender: 'Gênero',
      phoneNumber: 'Telefone',
      email: 'Email',
      zipCode: 'CEP',
      street: 'Rua/Avenida',
      houseNumber: 'Número',
      neighborhood: 'Bairro',
      stateOfTheCountry: 'Estado',
      city: 'Cidade'
    }
    if (!validateFields({ name, cpf, gender, phoneNumber, email, zipCode, street, houseNumber, neighborhood, stateOfTheCountry, city }, translations)) {
      return false
    }
    alert('Em fase de construção!')

  } else if (typeCustomerModal == 'juristic') {
    const { name, cnpj, legalResponsible, phoneNumber, email, zipCode, street, houseNumber, neighborhood, stateOfTheCountry, city } = state
    const translations = {
      name: 'Nome Empresarial',
      cnpj: 'CNPJ',
      legalResponsible: 'Responsável Legal',
      phoneNumber: 'Telefone',
      email: 'Email',
      zipCode: 'CEP',
      street: 'Rua/Avenida',
      houseNumber: 'Número',
      neighborhood: 'Bairro',
      stateOfTheCountry: 'Estado',
      city: 'Cidade',
    }
    if (!validateFields({ name, cnpj, legalResponsible, phoneNumber, email, zipCode, street, houseNumber, neighborhood, stateOfTheCountry, city }, translations)) {
      return false
    }
    alert('Em fase de construção!')
  }

}