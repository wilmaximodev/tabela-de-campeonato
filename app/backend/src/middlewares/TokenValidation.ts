import { NextFunction, Request, Response } from 'express';
import Token from '../auth/jwt';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class TokenValidation {
  static verifyToken(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(mapStatusHTTP('unauthorized'))
        .json({ message: 'Token not found' });
    }

    try {
      const [, token] = authorization.split(' ');
      const user = new Token().decode(token);
      res.locals = user;
      return next();
    } catch (e) {
      return res.status(mapStatusHTTP('unauthorized'))
        .json({ message: 'Token must be a valid token' });
    }
  }
}
