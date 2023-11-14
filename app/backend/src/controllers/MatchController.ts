import { Request, Response } from 'express';
import MatchService from '../services/MatchService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class MatchController {
  constructor(
    private macthService = new MatchService(),
  ) { }

  public async getAllMatches(req: Request, res: Response) {
    const { status, data } = await this.macthService.getAllMatches(req.query);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async finishMatch(req: Request, res: Response) {
    const { status, data } = await this.macthService.finishMatch(+req.params.id);
    return res.status(mapStatusHTTP(status)).json(data);
  }
}
