import IUser from '../interfaces/users/IUser';
import SequelizeUser from '../database/models/SequelizeUser';

class UserModel {
  private model = SequelizeUser;

  async login(email: string): Promise<IUser | null> {
    return this.model.findOne({ where: { email } });
  }

  async getRole(email: string): Promise<string | void> {
    const user = await this.model.findOne({ where: { email } });
    return user?.role;
  }
}

export default UserModel;
