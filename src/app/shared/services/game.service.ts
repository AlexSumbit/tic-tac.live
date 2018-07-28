import { Injectable } from '@angular/core';
import { Turn } from '../models/turn';
import { Player } from '../models/player';
import { Cell } from '../models/cell';
import { GameState } from '../models/game-state';
import { GameResult } from '../models/game-result';

@Injectable()
export class GameService {

  private _gameBoard;
  private _gameState: GameState;

  constructor() { 
    this._gameBoard = this.generateGameBoard();
  }
 
  /**
   * @returns void
   */
  private _updateGameState(): void {
    let currentPlayer = this._gameState.currentPlayer;

    this._gameState.result = this.checkWin();

    if(currentPlayer == this._gameState.players[0]) 
      this._gameState.currentPlayer = this._gameState.players[1];
    else 
      this._gameState.currentPlayer = this._gameState.players[0];
  }
  
  /**
   * @param  {Array<Player>} players
   * @param  {} gameMode
   */
  public initGame(players: Array<Player>, gameMode): GameState {
    if(players.length == 2) {
      this._gameState = new GameState(players, gameMode, players[0]);
    } else {
      throw new Error("ERROR: Wrong players count!");
    }

    return this._gameState;
  }

  /**
   * return current game state
   */
  public getGameState() {
    return this._gameState;
  }
  
  /**
   * @param  {Turn} turn
   * @param  {Player} player
   */
  public turn(turn: Turn) {
    this._gameBoard[turn.y][turn.x].player = this._gameState.currentPlayer;
    this._gameState.moveCount ++;

    this._updateGameState();

    return this._gameBoard;
  }

  /**
   * return current game board
   */
  public getGameBoard(): Array<Cell> {
    return this._gameBoard;
  }
  
  /**
   * @returns Array
   */
  public getFreeCells(): Array<Cell> {
    let cells:Array<Cell> = [];
    
    this._gameBoard.forEach((row) => {
      cells = cells.concat(row.filter(cell => {
        if(!cell.player) return cell;
      }));
    });

    return cells;
  }
  
  /**
   * generate new game board
   */
  public generateGameBoard() {
    let board = [];

    for(let i = 0; i < 3; i++) {
      board[i] = [];

      for(let j = 0; j < 3; j++) {
        board[i][j] = new Cell(j, i);
      }
    }

    return board;
  }

  /**
   * @returns boolean
   */
  private _checkRow(c1:Cell, c2:Cell, c3:Cell):boolean {
    if(c1.player && c2.player && c3.player) {
      if(c1.player.role == c2.player.role && c1.player.role == c3.player.role) return true;
    }

    return false;
  }
  
  /**
   * @returns GameResult
   */
  public checkWin(b = this._gameBoard): GameResult {
    let winCells:Array<Cell>;

    if(this._gameState.moveCount >= 1) {

      // rows
      if(this._checkRow( b[0][0], b[0][1], b[0][2] )) return new GameResult(b[0][0].player, [ b[0][0], b[0][1], b[0][2] ]);
      if(this._checkRow( b[1][0], b[1][1], b[1][2] )) return new GameResult(b[1][0].player, [ b[1][0], b[1][1], b[1][2] ]);
      if(this._checkRow( b[2][0], b[2][1], b[2][2] )) return new GameResult(b[2][0].player, [ b[2][0], b[2][1], b[2][2] ]);

      // cols
      if(this._checkRow( b[0][0], b[1][0], b[2][0] )) return new GameResult(b[0][0].player, [ b[0][0], b[1][0], b[2][0] ]);
      if(this._checkRow( b[0][1], b[1][1], b[2][1] )) return new GameResult(b[0][1].player, [ b[0][1], b[1][1], b[2][1] ]);
      if(this._checkRow( b[0][2], b[1][2], b[2][2] )) return new GameResult(b[0][2].player, [ b[0][2], b[1][2], b[2][2] ]);

      // diags
      if(this._checkRow( b[0][0], b[1][1], b[2][2] )) return new GameResult(b[0][0].player, [ b[0][0], b[1][1], b[2][2] ]);
      if(this._checkRow( b[2][0], b[1][1], b[0][2] )) return new GameResult(b[2][0].player, [ b[2][0], b[1][1], b[0][2] ]);

      // tie
      if(this._gameState.moveCount == 9) return new GameResult(null, null, "tie")
    }

    return null;
  }

}
