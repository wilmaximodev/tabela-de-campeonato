import * as bcrypt from 'bcryptjs';
import Token from '../auth/jwt';
import UserModel from '../models/UserModel';
import IUserModel from '../Interfaces/users/IUserModel';
import ILogin from '../Interfaces/users/ILogin';
import { ServiceResponse } from '../types/ServiceResponse';
import { TokenType } from '../types/Token';

export default class UserService {
  constructor(
    private userModel: IUserModel = new UserModel(),
  ) { }

  public async login(Login: ILogin): Promise<ServiceResponse<TokenType>> {
    const user = await this.userModel.getUser(Login.email);
    if (!user || !bcrypt.compareSync(Login.password, user.password)) {
      return { status: 'invalidData', data: { message: 'All fields must be filled' } };
    }

    const token = new Token().generate({ id: user.id, email: user.email });

    return { status: 'successful', data: { token } };
  }

  public async getRole(email: string): Promise<ServiceResponse<string>> {
    const role = await this.userModel.getRole(email);
    if (!role) {
      return { status: 'invalidData', data: { message: 'User not found' } };
    }

    return { status: 'successful', data: role };
  }
}
