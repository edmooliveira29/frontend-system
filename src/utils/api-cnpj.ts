import axios from 'axios'
import { AlertGeneral, alertLoading } from '../components'

export const apiCnpj = async (cnpj: string): Promise<any> => {
  alertLoading('open', 'Carregando dados do CNPJ digitado...')
  try {
    const response = await axios.get(`https://brasilapi.com.br/api/cnpj/v1/${cnpj.replace(/\D/g, "")}`)
    alertLoading('close')
    return response
  } catch (error:any) {
    AlertGeneral({ title: 'Erro', message: `${error.response.data.message}`, type: 'error' })
  }
}