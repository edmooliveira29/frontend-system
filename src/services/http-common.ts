import axios from 'axios';

export default axios.create({
	baseURL: 'http://34.139.16.117:5000/v1/api',
});

