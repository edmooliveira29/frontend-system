/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';

export default axios.create({
	baseURL: 'http://localhost:5000/v1/api',
});

