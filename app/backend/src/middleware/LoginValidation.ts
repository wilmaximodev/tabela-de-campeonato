import { Request, Response, NextFunction } from 'express';
import validateEmail from '../utils/validateEmail';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class LoginValidation {
  static inputLogin(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    if (!validateEmail(email) || password.length < 6) {
      return res.status(mapStatusHTTP('unauthorized'))
        .json({ message: 'Invalid email or password' });
    }
    next();
  }
}
