import * as sinon from 'sinon';
import * as chai from 'chai';

import chaiHttp = require('chai-http');

import { App } from '../app';
import SequelizeMatch from '../database/models/SequelizeMatch';
import {
  matches,
  inProgressFalse,
  inProgressTrue,
  newPlacar,
  validMatch,
  createMatch,
  invalidMatch,
  invalidMatch2,
} from './Mocks/MatchMock';
import validToken from './Mocks/validToken';

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

    const {status, body} = await chai.request(app).patch('/matches/1/finish').set('Authorization', `Bearer ${validToken}`);

    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal({ message: 'Finished' });
  });

  it('Verifica se é possivel alterar placar das partidas', async () => {
    sinon.stub(SequelizeMatch, 'update').resolves(inProgressTrue[0] as any);

    const {status, body} = await chai.request(app).patch('/matches/1').send(newPlacar).set('Authorization', `Bearer ${validToken}`);

    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal({ message: 'Updated' });
  });

  it('Verifica se é possivel criar nova partida', async () => {
    sinon.stub(SequelizeMatch, 'create').resolves(createMatch as any)


    const { status, body } =  await chai.request(app).post('/matches/').set('Authorization', `Bearer ${validToken}`).send(validMatch)


    expect(status).to.be.equal(201);
    expect(body).to.be.deep.equal(createMatch);
  });

  it('Verifica se não é possivel criar partidas com times iguais', async () => {
    sinon.stub(SequelizeMatch, 'create').resolves({} as any)
    const { status, body } =  await chai.request(app).post('/matches/').set('Authorization', `Bearer ${validToken}`).send(invalidMatch);

    expect(status).to.be.equal(422);
    expect(body).to.be.deep.equal({ message: 'It is not possible to create a match with two equal teams' });
  });

  it('Verifica se não é possivel criar partidas com times inexistestes', async () => {
    sinon.stub(SequelizeMatch, 'create').resolves({} as any)
    const { status, body } =  await chai.request(app).post('/matches/').set('Authorization', `Bearer ${validToken}`).send(invalidMatch2);

    expect(status).to.be.equal(404);
    expect(body).to.be.deep.equal({ message: 'There is no team with such id!' });
  });
});
