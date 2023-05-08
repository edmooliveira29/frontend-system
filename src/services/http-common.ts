import axios from 'axios';
import https from 'https';
const agent = new https.Agent({
	rejectUnauthorized: false,
	requestCert: false });

export default axios.create({
	baseURL: 'https://34.139.16.117:5000/v1/api',
	responseType: 'json',
    withCredentials: true,
    httpsAgent: agent
});

