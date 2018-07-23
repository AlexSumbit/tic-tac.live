import { Injectable } from '@angular/core';
import { Turn } from '../models/turn';
import { Player } from '../models/player';
import { Cell } from '../models/cell';

@Injectable()
export class GameService {

  private _gameBoard;

  constructor() { 
    this._gameBoard = this.generateGameBoard();
  }

  public turn(turn: Turn, player: Player) {
    this._gameBoard[turn.y][turn.x].player = player;

    return this._gameBoard;
  }

  public getGameBoard() {
    return this._gameBoard;
  }

  public generateGameBoard() {
    let board = [];

    for(let i = 0; i < 3; i++) {
      board[i] = [];

      for(let j = 0; j < 3; j++) {
        board[i][j] = new Cell(i, j);
      }
    }

    return board;
  }

  public checkWin(): string {
    return "";
  }

}
