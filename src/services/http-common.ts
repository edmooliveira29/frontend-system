import axios from 'axios'

const environment = process.env.NODE_ENV
const baseURLDevelopment = process.env.REACT_APP_BASE_URL_DEVELOPMENT
const baseURLProduction = process.env.REACT_APP_BASE_URL_PRODUCTION

export default axios.create({
  baseURL: environment === 'production' ? baseURLProduction : baseURLDevelopment,
  responseType: 'json',
  withCredentials: true
})

