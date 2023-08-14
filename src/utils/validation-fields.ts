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
  }
  if (emptyFields.length > 0) {
    AlertGeneral({ message: `O seguinte campo é obrigatório: ${emptyFields[0]}.`, type: 'error' })
    return false
  } else { return true }

}