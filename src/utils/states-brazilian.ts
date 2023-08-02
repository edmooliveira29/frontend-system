import axios from 'axios'

export const statesBrazilian = [
  { value: 'ac', label: 'Acre' },
  { value: 'al', label: 'Alagoas' },
  { value: 'ap', label: 'Amapá' },
  { value: 'am', label: 'Amazonas' },
  { value: 'ba', label: 'Bahia' },
  { value: 'ce', label: 'Ceará' },
  { value: 'df', label: 'Distrito Federal' },
  { value: 'es', label: 'Espírito Santo' },
  { value: 'go', label: 'Goiás' },
  { value: 'ma', label: 'Maranhão' },
  { value: 'mt', label: 'Mato Grosso' },
  { value: 'ms', label: 'Mato Grosso do Sul' },
  { value: 'mg', label: 'Minas Gerais' },
  { value: 'pa', label: 'Pará' },
  { value: 'pb', label: 'Paraíba' },
  { value: 'pr', label: 'Paraná' },
  { value: 'pe', label: 'Pernambuco' },
  { value: 'pi', label: 'Piauí' },
  { value: 'rj', label: 'Rio de Janeiro' },
  { value: 'rn', label: 'Rio Grande do Norte' },
  { value: 'rs', label: 'Rio Grande do Sul' },
  { value: 'ro', label: 'Rondônia' },
  { value: 'rr', label: 'Roraima' },
  { value: 'sc', label: 'Santa Catarina' },
  { value: 'sp', label: 'São Paulo' },
  { value: 'se', label: 'Sergipe' },
  { value: 'to', label: 'Tocantins' },
]

export const citiesStates = (state: string) => {
  let formattedCities: any[] = []
  fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`)
    .then(response => response.json())
    .then(cities => {
      formattedCities = cities.map((city: { nome: string }) => ({
        value: city.nome.toLowerCase(),
        label: city.nome
      }))
    })
  console.log(formattedCities)
}