import * as bcrypt from 'bcrypt';
import jwt from '../auth/jwt';
import UserModel from '../models/UserModel';
import IUser from '../interfaces/users/IUser';
import IUserModel from '../interfaces/users/IUserModel';
import { ServiceResponse } from '../types/ServiceResponse';
import { Token } from '../types/Token';

export default class UserService {
  constructor(
    private userModel: IUserModel = new UserModel(),
  ) { }

  public async login(data: IUser): Promise<ServiceResponse<Token>> {
    const user = await this.userModel.login(data.email);
    if (!user || !bcrypt.compareSync(data.password, user.password)) {
      return { status: 'invalidData', data: { message: 'All fields must be filled' } };
    }

    const { username, id, role, email } = user;
    const token = jwt.generateJwtToken({ username, id, role, email });

    return { status: 'successful', data: { token } };
  }
}
