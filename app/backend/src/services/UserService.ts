import * as bcrypt from 'bcrypt';

import jwt from '../auth/jwt';
import UserModel from '../models/UserModel';
import IUserModel from '../interfaces/users/IUserModel';
import { ServiceLoginResponse } from '../types/ServiceResponse';

export default class UserService {
  constructor(
    private userModel: IUserModel = new UserModel(),
  ) { }

  public async login(email: string, password: string): Promise<ServiceLoginResponse> {
    const user = await this.userModel.login(email);
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return { status: 'notFound', data: 'Incorrect informations' };
    }
    const token = jwt.generateJwtToken({
      id: user.id,
      username: user.username,
    });

    return { status: 'successful', data: token };
  }
}
