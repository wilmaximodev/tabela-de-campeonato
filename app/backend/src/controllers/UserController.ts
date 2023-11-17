import { Request, Response } from 'express';
import UserService from '../services/UserService';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import ILogin from '../Interfaces/users/ILogin';

export default class UserController {
  constructor(
    private userService = new UserService(),
  ) { }

  public async login(req: Request, res: Response) {
    const Login: ILogin = req.body;
    const { status, data } = await this.userService.login(Login);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getRole(req: Request, res: Response) {
    const { status, data } = await this.userService.getRole(res.locals.email);
    return res.status(mapStatusHTTP(status)).json(data);
  }
}
