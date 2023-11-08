import * as bcrypt from 'bcrypt';
import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../app';
import SequelizeUser from '../database/models/SequelizeUser';
import { userMock, validUser } from './Mocks/UserMock';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('User Test', function() {
    it('Verifica se é possivel fazer login corretamente', async () => {
        sinon.stub(SequelizeUser, 'findOne').resolves(userMock as any);
        sinon.stub(bcrypt, 'compareSync').returns(true);
    
        const {status, body} = await chai.request(app).post('/login').send(validUser);
    
        expect(status).to.be.equal(200);
        expect(body).to.haveOwnProperty('token');
      });
});