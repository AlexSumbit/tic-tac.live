import { Component, OnInit } from '@angular/core';
import { GameService } from '../../shared/services/game.service';
import { TwoPlayersService } from '../../shared/services/two-players.service';
import { Player } from '../../shared/models/player';
import { Turn } from '../../shared/models/turn';

@Component({
  selector: 'tic-two-players',
  templateUrl: './two-players.component.html',
  styleUrls: ['./two-players.component.scss'],
  providers: [
    GameService
  ]
})
export class TwoPlayersComponent implements OnInit {

  constructor(
    private game: GameService
  ) {
    let player1 = new Player("player 1", "O");
    let player2 = new Player("player 2", "X");

    this.game.initGame([player1, player2], "Two players");
   }

  ngOnInit() {
    
  }

  turn(turn: Turn) {
    this.game.turn(turn);
  }

  get gameBoard() {
    return this.game.getGameBoard();
  }

  get gameState() {
    return this.game.getGameState();
  }

}
