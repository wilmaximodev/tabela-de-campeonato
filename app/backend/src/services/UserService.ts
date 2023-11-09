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
    console.log('Console na Service:', user);
    if (!user) {
      return { status: 'notFound', data: { message: 'Incorrect informations' } };
    }
    const isPasswordCorrect = bcrypt.compareSync(data.password, user.password);
    if (!isPasswordCorrect) {
      return { status: 'conflict', data: { message: 'KeyBroken' } };
    }
    const token = jwt.generateJwtToken({
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    });

    return { status: 'successful', data: { token } };
  }
}
