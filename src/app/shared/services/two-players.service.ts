import { Injectable } from '@angular/core';
import { GameService } from './game.service';

@Injectable()
export class TwoPlayersService {

  constructor(
    private game: GameService
  ) { }

}
