import axios from 'axios'
import { AlertGeneral } from '../components'

export const getZipCode = async (value: string) => {
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${value}/json`)
    return data

  } catch (error) {
    AlertGeneral({ title: 'Erro', message: 'CEP não encontrado', type: 'error' })
  }
}
