export class Masks {
  maskZipCode(value: string) {
    value = value.replace(/\D/g, '')
    value = value.replace(/^(\d{5})(\d)/, '$1-$2')
    return value
  }

  maskCpfCnpj(value: string) {
    value = value.replace(/\D/g, "")
    if (value.length <= 11) {
      value = value.replace(/(\d{3})(\d)/, "$1.$2")
      value = value.replace(/(\d{3})(\d)/, "$1.$2")
      value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    } else {
      value = value.replace(/^(\d{2})(\d)/, "$1.$2")
      value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      value = value.replace(/\.(\d{3})(\d)/, ".$1/$2")
      value = value.replace(/(\d{4})(\d)/, "$1-$2")
    }

    return value
  }


  maskPhoneNumber(value: string) {
    value = value.replace(/\D/g, '')
    if (value.length == 12) {
      value = value.slice(0, 11)
    }
    if (value.length > 6 && value.length < 11) {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3")
    }
    if (value.length < 12) {
      value = value.replace(/^(\d{2})(\d{5})(\d{0,4})$/, "($1) $2-$3")
    }

    return value
  }
}
