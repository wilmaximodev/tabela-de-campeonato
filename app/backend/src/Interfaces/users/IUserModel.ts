import IUser from './IUser';

export default interface IUserModel {
  getUser(email: string): Promise<IUser | null>
  getRole(email: string): Promise<object>
}
