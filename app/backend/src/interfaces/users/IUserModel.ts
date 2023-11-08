import { IUser } from './IUser';

export default interface ITeamModel {
  login(email: string): Promise<IUser | null>
}
