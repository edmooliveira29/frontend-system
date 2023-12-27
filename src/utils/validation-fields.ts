import { AlertGeneral } from '../components'
export const validateFields = (inputs: any, translations: any) => {
  const emptyFields = []
  let elementInput, elementInputLabel
  for (const index in inputs) {
    elementInput = document.getElementById(`input-${index}`)
    elementInputLabel = document.getElementById(`label-input-${index}`)
    if (Array.isArray(inputs[index])) {
      if ((inputs[index]).length == 0) {
        elementInputLabel?.classList.add('text-danger')
        elementInput?.classList.add('border')
        elementInput?.classList.add('border-danger')
        emptyFields.push(translations[index] || index)
      } else if (typeof (inputs[index])[0] === 'string') {
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
      if (index === 'email' && inputs[index] && !validationEmail(inputs[index])) {
        AlertGeneral({ title: 'Erro', message: `O email '${inputs[index]}' é inválido!`, type: 'error' }); return false
      }
      if (index === 'cpf' && inputs[index] && !validationCPF(inputs[index])) {
        AlertGeneral({ title: 'Erro', message: `O cpf '${inputs[index]}' é inválido!`, type: 'error' }); return false
      }
      if (index === 'cnpj' && inputs[index]) {
        inputs[index].length !== 18 && AlertGeneral({ title: 'Erro', message: `O cnpj digitado '${inputs[index]}' é inválido!`, type: 'error' }); return false
      }

    }
  }

  if (emptyFields.length > 0 && typeof emptyFields[0] == 'string') {
    AlertGeneral({ title: 'Erro', message: `O campo <strong>${emptyFields[0]}</strong> é obrigatório.`, type: 'error' })
    return false
  }
  if (emptyFields.length > 0 && typeof emptyFields[0] == 'object') {
    AlertGeneral({ title: 'Erro', message: `O item ${emptyFields[0].i} dos <strong>${emptyFields[0].locale}</strong> contém alguns campos que são obrigatórios.`, type: 'error' })
    return false
  }
  return true
}

export const validationCPF = (cpf: string): boolean => {
  cpf = cpf.replace(/\D/g, "")
  let sum
  let rest
  sum = 0
  

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

export const validationEmail = (email: string): boolean => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export const validationPassword = (password: string): string => {
  let message = ''
  if (password.length < 8) {
    message = message + ' - Sua senha deve ter pelo menos 8 caracteres</br>'
  }
  if (!(/[a-z]/.test(password))) {
    message = message + ' - Sua senha deve ter pelo menos uma letra minuscula</br>'
  }
  if (!(/[A-Z]/.test(password))) {
    message = message + ' - Sua senha deve ter pelo menos uma letra maiuscula</br>'
  }
  if (!(/[0-9]/.test(password))) {
    message = message + ' - Sua senha deve ter pelo menos um número</br>'
  }
  if (!(/\W/.test(password))) {
    message = message + ' - Sua senha deve ter pelo menos um caractere especial</br>'
  }

  return (`<div><span style="font-size: 12px; color: red"> ${message}</span></div>`)
}