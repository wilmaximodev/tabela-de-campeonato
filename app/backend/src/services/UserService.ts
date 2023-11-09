import * as bcrypt from 'bcrypt';
import Token from '../auth/jwt';
import UserModel from '../models/UserModel';
import IUser from '../interfaces/users/IUser';
import IUserModel from '../interfaces/users/IUserModel';
import { ServiceResponse } from '../types/ServiceResponse';
import { TokenType } from '../types/Token';

export default class UserService {
  constructor(
    private userModel: IUserModel = new UserModel(),
  ) { }

  public async login(data: IUser): Promise<ServiceResponse<TokenType>> {
    const user = await this.userModel.login(data.email);
    if (!user || !bcrypt.compareSync(data.password, user.password)) {
      return { status: 'invalidData', data: { message: 'All fields must be filled' } };
    }

    const token = Token.generateJwtToken({
      id: user.id,
      email: user.email,
    });

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
