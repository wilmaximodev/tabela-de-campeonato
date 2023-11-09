import * as jwt from 'jsonwebtoken';
import { Payload } from '../types/Payload';

const secret = process.env.JWT_SECRET ?? 'mySecretKey';

export default class Token {
  static generateJwtToken(payload: Payload): string {
    return jwt.sign(payload, secret, { expiresIn: '7h' });
  }

  static decodeJwtToken(auth: string): Payload {
    const token = auth.split(' ')[1];
    return jwt.verify(token, secret) as Payload;
  }
}
