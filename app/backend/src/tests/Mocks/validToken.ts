import * as jwt from 'jsonwebtoken';
import { validUser } from './UserMock';

const validToken: string = jwt.sign(validUser, 'jwt_secret');

export default validToken;
