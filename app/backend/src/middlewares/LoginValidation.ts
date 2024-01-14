import { Request, Response, NextFunction } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import validateEmail from '../utils/validateEmail';

export default class LoginValidation {
  static inputLogin(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(mapStatusHTTP('invalidData'))
        .json({ message: 'All fields must be filled' });
    }
    if (validateEmail(email) || password.length < 6) {
      return res.status(mapStatusHTTP('unauthorized'))
        .json({ message: 'Invalid email or password' });
    }
    return next();
  }
}
