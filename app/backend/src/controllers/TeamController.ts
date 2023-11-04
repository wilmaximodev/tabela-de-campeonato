import { Request, Response } from 'express';
import TeamService from '../services/TeamService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class BookController {
  constructor(
    private teamService = new TeamService(),
  ) { }

  public async getAllTeams(_req: Request, res: Response) {
    const { status, data } = await this.teamService.getAllTeams();
    return res.status(mapStatusHTTP(status)).json(data);
  }
}
