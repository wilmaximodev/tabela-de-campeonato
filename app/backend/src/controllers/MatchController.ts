import { Request, Response } from 'express';
import MatchService from '../services/MatchService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class MatchController {
  constructor(
    private matchService = new MatchService(),
  ) { }

  public async getAllMatches(req: Request, res: Response) {
    const { status, data } = await this.matchService.getAllMatches(req.query);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async finishMatch(req: Request, res: Response) {
    const { status, data } = await this.matchService.finishMatch(+req.params.id);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async updatePlacar(req: Request, res: Response) {
    const { status, data } = await this.matchService.updatePlacar(req.body, +req.params.id);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async createMatch(req: Request, res: Response) {
    const { status, data } = await this.matchService.createMatch(req.body);
    return res.status(mapStatusHTTP(status)).json(data);
  }
}
