import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../app';
import SequelizeTeam from '../database/models/SequelizeTeam';
import { team, teams } from './Mocks/TeamMock';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Teams Test', function() {
  it('Show all teams', async function() {
    sinon.stub(SequelizeTeam, 'findAll').resolves(team as any);

    const { status, body } = await chai.request(app).get('/teams');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(team);
  });  
  afterEach(sinon.restore);
});