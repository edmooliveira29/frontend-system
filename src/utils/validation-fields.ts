import { AlertGeneral } from '../components'

export const validateFields = (inputs: any, translations: any) => {
  const emptyFields = []
  for (const fieldName in inputs) {
    const elementInput = document.getElementById(`input-${(translations[fieldName]).toLowerCase()}`)
    const elementInputLabel = document.getElementById(`label-input-${(translations[fieldName]).toLowerCase()}`)
    elementInputLabel?.classList.remove('text-danger')
    elementInput?.classList.remove('border')
    elementInput?.classList.remove('border-danger')
    if (!inputs[fieldName]) {
      elementInputLabel?.classList.add('text-danger')
      elementInput?.classList.add('border')
      elementInput?.classList.add('border-danger')
      emptyFields.push(translations[fieldName] || fieldName)
    }
    if (fieldName === 'cpf' && inputs[fieldName] && !validationCPF(inputs[fieldName])) {
      AlertGeneral({ message: `O cpf '${inputs[fieldName]}' é inválido!`, type: 'error' })
      return false
    }
    if (fieldName === 'cnpj' && inputs[fieldName]) {
      inputs[fieldName].length !== 18 && AlertGeneral({ message: `O cnpj digitado '${inputs[fieldName]}' é inválido!`, type: 'error' }); return false
    }
  }
  if (emptyFields.length > 0) {
    AlertGeneral({ message: `O campo '${emptyFields[0].toLowerCase()}' é obrigatório.`, type: 'error' })
    return false
  } else { return true }

}

export const validationCPF = (cpf: string): boolean => {
  cpf = cpf.replace(/\D/g, "")
  let sum
  let rest
  sum = 0
  if (cpf == "00000000000") return false

  for (let i = 1; i <= 9; i++)
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i)
  rest = (sum * 10) % 11

  if ((rest == 10) || (rest == 11)) rest = 0
  if (rest != parseInt(cpf.substring(9, 10))) return false

  sum = 0
  for (let i = 1; i <= 10; i++)
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i)
  rest = (sum * 10) % 11

  if ((rest == 10) || (rest == 11)) rest = 0
  if (rest != parseInt(cpf.substring(10, 11))) return false
  return true
}