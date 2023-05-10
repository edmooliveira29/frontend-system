import axios from 'axios';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export default axios.create({
	baseURL: 'https://api.edmopuc.online/v1/api',
	responseType: 'json',
    withCredentials: true,
});

