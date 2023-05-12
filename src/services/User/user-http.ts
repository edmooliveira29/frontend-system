import http from '../http-common';
import type UserI from './userI';

export class UserService {
	async create(data: any) {
		return (await http.post<any>('/user', data)).data;
	}

	async login(data: any) {
		return (await (http.post<any>('/login', data))).data
	}
}
