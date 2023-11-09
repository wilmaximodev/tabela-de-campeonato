import IUser from '../interfaces/users/IUser';
import SequelizeUser from '../database/models/SequelizeUser';

class UserModel {
  private model = SequelizeUser;

  async login(email: string): Promise<IUser | null> {
    return this.model.findOne({ where: { email } });
  }
}

export default UserModel;
