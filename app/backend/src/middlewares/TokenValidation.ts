import { NextFunction, Request, Response } from 'express';
import Token from '../auth/jwt';

export default class TokenValidation {
  static verifyToken(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    try {
      const token = authorization.split(' ')[1];
      const user = new Token().decode(token);
      res.locals = user;
      next();
    } catch (e) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
  }
}
