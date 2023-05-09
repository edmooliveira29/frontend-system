import axios from 'axios';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export default axios.create({
	baseURL: 'https://34.139.16.117:5000/v1/api',
	responseType: 'json',
    withCredentials: true,
});

