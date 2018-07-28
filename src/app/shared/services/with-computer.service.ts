import { Injectable } from '@angular/core';
import { GameService } from './game.service';
import { Cell } from '../models/cell';
import { Player } from '../models/player';

@Injectable()
export class WithComputerService {

  public player: Player;
  public computer: Player;

  constructor(
    private _game: GameService
  ) { }

  /**
   * @returns Cell
   */
  public getCellForTurn(): Cell {
    let cellToEnd = this.getCellToEnd();
    let cell = null;

    if(cellToEnd) {
      cell = cellToEnd;
    } else {
      let freeCells: Array<Cell> = this._game.getFreeCells();

      if(freeCells.length) {
        let i = Math.floor(Math.random() * freeCells.length);
        cell = freeCells[i];
      }
    }

    return cell;
  }

  public getCellToEnd(): Cell {
    let winCell:Cell = null;
    let loseCell:Cell = null;

    let board;
    let freeCells = this._game.getFreeCells();

    freeCells.forEach((fc) => {
      board = JSON.parse(JSON.stringify( this._game.getGameBoard() ));

      board.forEach(row => {
        row.forEach(cell => {
          if(fc.x == cell.x && fc.y == cell.y) {
            cell.player = this.computer;
            let res = this._game.checkWin(board);
            if(res) {
              winCell = cell;
            }

            cell.player = this.player;
            res = this._game.checkWin(board);
            if(res) {
              loseCell = cell;
            }
          }
        });
      });
    });

    return winCell ? winCell : loseCell;
  }

  /**
   * @param  {} role
   */
  public selectPlayer(role) {
    let players;

    switch(role) {
      case "O": 
        this.player = new Player("player", "O");
        this.computer = new Player("computer", "X");
        players = [this.computer, this.player];
        break;
      case "X":
        this.player = new Player("player", "X");
        this.computer = new Player("computer", "O");
        players = [this.player, this.computer];
        break;
    }

    this._game.initGame(players, "With computer");
  }

}
