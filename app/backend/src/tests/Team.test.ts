import * as sinon from 'sinon';
import * as chai from 'chai';

import chaiHttp = require('chai-http');

import { App } from '../app';
import SequelizeTeam from '../database/models/SequelizeTeam';
import { team } from './Mocks/TeamMock';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Teams Test', () => {
  it('Show all teams', async () => {
    sinon.stub(SequelizeTeam, 'findAll').resolves(team as any);

    const { status, body } = await chai.request(app).get('/teams');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(team);
  });
  afterEach(sinon.restore);

  it('Show one team', async () => {
    sinon.stub(SequelizeTeam, 'findByPk').resolves(team as any);

    const { status, body } = await chai.request(app).get('/teams/1');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(team);
  });
});
