import IUser from './IUser';

export default interface IUserModel {
  login(email: string): Promise<IUser | null>
}