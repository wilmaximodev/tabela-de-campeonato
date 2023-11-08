import * as jwt from 'jsonwebtoken';
import { Payload } from '../types/Payload';

const secret = process.env.JWT_SECRET || 'mySecretKey';

const generateJwtToken = (payload: Payload): string => {
  const token = jwt.sign(payload, secret, {
    expiresIn: '1h',
  });
  return token;
};

const decodeJwtToken = (token: string): Payload => {
  const response = jwt.verify(token, secret);
  return response as Payload;
};

export default {
  generateJwtToken,
  decodeJwtToken,
};
