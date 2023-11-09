import IUserModel from '../Interfaces/users/IUserModel';
import IUser from '../Interfaces/users/IUser';
import SequelizeUser from '../database/models/SequelizeUser';

export default class UserModel implements IUserModel {
  private model = SequelizeUser;

  async login(email: string): Promise<IUser | null> {
    return this.model.findOne({ where: { email } });
  }

  async getRole(email: string): Promise<string | void> {
    const user = await this.model.findOne({ where: { email } });
    return user?.role;
  }
}
