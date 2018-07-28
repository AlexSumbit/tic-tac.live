import { Injectable } from '@angular/core';
import { GameService } from './game.service';
import { Cell } from '../models/cell';

@Injectable()
export class WithComputerService {

  constructor(
    private _game: GameService
  ) { }
  
  /**
   * @returns Cell
   */
  public getCellForTurn(): Cell {
    let freeCells: Array<Cell> = this._game.getFreeCells();

    if(freeCells.length) {
      let i = Math.floor(Math.random() * freeCells.length);
      return freeCells[i];
    }

    return null;
  }

}
