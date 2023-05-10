import axios from 'axios'
const environment = process.env.NODE_ENV
const baseURLDevelopment = process.env.BASE_URL_DEVELOPMENT
const baseURLProduction = process.env.BASE_URL_PRODUCTION
console.log(environment)
console.log(baseURLDevelopment)
console.log(baseURLProduction)
export default axios.create({
	baseURL: environment === 'production' ? baseURLProduction : baseURLDevelopment,
	responseType: 'json',
	withCredentials: true
});

