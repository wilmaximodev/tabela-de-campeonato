import * as bcrypt from 'bcrypt';
import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../app';
import SequelizeUser from '../database/models/SequelizeUser';
import { userMock, validUser, invalidEmail, invalidPassword } from './Mocks/UserMock';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('User Test', function() {

  afterEach(sinon.restore);

  it('Verifica se é possivel fazer login corretamente', async () => {
    sinon.stub(SequelizeUser, 'findOne').resolves(userMock as any);
    sinon.stub(bcrypt, 'compareSync').returns(true);
    
    const {status, body} = await chai.request(app).post('/login').send(validUser);
    
    expect(status).to.be.equal(200);
    expect(body).to.haveOwnProperty('token');
  });

  it('Verifica se é possivel fazer login com senha incorreta', async () => {
    sinon.stub(SequelizeUser, 'findOne').resolves(userMock as any);
    sinon.stub(bcrypt, 'compareSync').returns(false);
    
    const {status, body} = await chai.request(app).post('/login').send(invalidPassword);
    
    expect(status).to.be.equal(400);
    expect(body.message).to.be.equal('All fields must be filled');
  });

  it('Verifica se é possivel fazer login com email incorreto', async () => {
    sinon.stub(SequelizeUser, 'findOne').resolves(null);
    sinon.stub(bcrypt, 'compareSync').returns(false);
    
    const {status, body} = await chai.request(app).post('/login').send(invalidEmail);
    
    expect(status).to.be.equal(401);
    expect(body.message).to.be.equal('Invalid email or password');
  });
});