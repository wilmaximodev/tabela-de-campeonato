import * as bcrypt from 'bcrypt';
import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../app';
import SequelizeMatch from '../database/models/SequelizeMatch';
import { match, matches, inProgressFalse, inProgressTrue } from './Mocks/MatchMock'

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Match Test', function() {
  afterEach(sinon.restore);

  it('Verifica se retorna todas as partidas', async () => {
    sinon.stub(SequelizeMatch, 'findAll').resolves(matches as any);

    const {status, body} = await chai.request(app).get('/matches');

    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(matches);
  });

  it('Verifica se retorna as partidas em progresso', async () => {
    sinon.stub(SequelizeMatch, 'findAll').resolves(inProgressTrue as any);

    const {status, body} = await chai.request(app).get('/matches?inProgress=true');

    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(inProgressTrue);
  });

  it('Verifica se retorna partidas finalizadas', async function() {
		sinon.stub(SequelizeMatch, 'findAll').resolves(inProgressFalse as any)

		const { status, body } = await chai.request(app).get('/matches?inProgress=false')

		expect(status).to.equal(200)
		expect(body).to.deep.equal(inProgressFalse)
	})

  it('Verifica se é possivel finalizar uma partida', async () => {
    sinon.stub(SequelizeMatch, 'update').resolves(inProgressTrue[0] as any);

    const {status, body} = await chai.request(app).patch('/matches/1/finish');

    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal({ message: 'Finished' });
  });
});