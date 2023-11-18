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

describe('Leaderboard test', function() {
  it('Verifica se retorna o desempenho dos times da casa corretamente', async function() {
    
    });
});