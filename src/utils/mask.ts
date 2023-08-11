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

  maskMoney(value: string) {

    value = value + ''
    value = value.replace(/[\D]+/g, '')
    value = value + ''
    value = value.replace(/([0-9]{2})$/g, ",$1")
    if (value.length > 6) {
      value = value.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")
    }
    if (value.length == 3 && value != ',00') {
      value = '0' + value
    }
    if (value == ',00') {
      value = '0,00'
    }
    if (value.length == 5 && value[0] == '0') {
      value = value.slice(1, value.length)
    }

    return value
  }

}
