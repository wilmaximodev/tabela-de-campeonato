import * as jwt from 'jsonwebtoken';
import ITokenGenerator from '../Interfaces/token/ITokenGenerator';
import { Payload } from '../types/Payload';

const secret = process.env.JWT_SECRET ?? 'jwt_secret';

export default class Token implements ITokenGenerator {
  private jwt = jwt;

  generate(payload: Payload): string {
    const token = this.jwt.sign({ id: payload.id, email: payload.email }, secret);
    return token;
  }

  decode(token: string): Payload {
    const payload = this.jwt.verify(token, secret) as Payload;
    return payload;
  }
}
