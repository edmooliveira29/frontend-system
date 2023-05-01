import http from '../http-common';
import type UserI from './userI';

export class UserService {
	async create(data: UserI) {
		return http.post<UserI>('/user', data);
	}
}
