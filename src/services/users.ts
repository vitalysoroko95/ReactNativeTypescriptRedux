import { AxiosResponse } from 'axios';
import { http } from './http';

class UserService {
  static async getUserData(): Promise<AxiosResponse> {
    return await http.get<any, any>('/users');
  }
}

export default UserService;
