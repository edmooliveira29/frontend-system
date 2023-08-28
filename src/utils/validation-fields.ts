import { AlertGeneral } from '../components'

export const validateFields = (inputs: any, translations: any) => {
  const emptyFields = []
  let elementInput, elementInputLabel
  for (const index in inputs) {
    elementInput = document.getElementById(`input-${index}`)
    elementInputLabel = document.getElementById(`label-input-${index}`)

    if (Array.isArray(inputs[index])) {
      console.log(inputs[index][0])
      if ((inputs[index]).length == 0) {
        elementInputLabel?.classList.add('text-danger')
        elementInput?.classList.add('border')
        elementInput?.classList.add('border-danger')
        emptyFields.push(translations[index] || index)
      } else if (typeof (inputs[index])[0] === 'string') {
        console.log(elementInputLabel)
        elementInputLabel?.classList.remove('text-danger')
        elementInput?.classList.remove('border')
        elementInput?.classList.remove('border-danger')
      } else {

        inputs[index].forEach((item: any, i: any) => {
          Object.keys(item).forEach(key => {
            const elementInput = document.getElementById(`input-${key}`)
            const elementInputLabel = document.getElementById(`label-input-${key}`)
            if (!item[key]) {
              elementInputLabel?.classList.add('text-danger')
              elementInput?.classList.add('border')
              elementInput?.classList.add('border-danger')
              emptyFields.push({ i: i + 1, key, locale: translations[index] })
            } else {
              elementInputLabel?.classList.remove('text-danger')
              elementInput?.classList.remove('border')
              elementInput?.classList.remove('border-danger')
            }
          })
        })
      }
    } else {

      elementInputLabel?.classList.remove('text-danger')
      elementInput?.classList.remove('border-danger')
      elementInput?.classList.remove('.Mui-focusVisible')
      if (!inputs[index]) {
        elementInputLabel?.classList.add('text-danger')
        elementInput?.classList.add('border')
        elementInput?.classList.add('border-danger')
        emptyFields.push(translations[index] || index)
      }
      if (index === 'cpf' && inputs[index] && !validationCPF(inputs[index])) {
        AlertGeneral({ message: `O cpf '${inputs[index]}' é inválido!`, type: 'error' }); return false
      }
      if (index === 'cnpj' && inputs[index]) {
        inputs[index].length !== 18 && AlertGeneral({ message: `O cnpj digitado '${inputs[index]}' é inválido!`, type: 'error' }); return false
      }

    }
  }


  if (emptyFields.length > 0 && typeof emptyFields[0] == 'string') {
    AlertGeneral({ message: `O campo <strong>${emptyFields[0]}</strong> é obrigatório.`, type: 'error' })
    return false
  }
  if (emptyFields.length > 0 && typeof emptyFields[0] == 'object') {
    AlertGeneral({ message: `O item ${emptyFields[0].i} dos <strong>${emptyFields[0].locale}</strong> contém alguns campos que são obrigatórios.`, type: 'error' })
    return false
  }
  return true

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