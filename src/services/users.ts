import { AxiosResponse } from 'axios';
import { http } from './http';

export type User = {
  uid?: string;
  username?: string;
  phoneNumber?: string;
  email?: string;
};




class UserService {
  static async getUserData(): Promise<AxiosResponse> {
    return await http.get<any, any>('/users');
  }
}

export default UserService;
