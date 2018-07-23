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
    let player1 = new Player("1", "X");
    let player2 = new Player("2", "O");

    this.game.turn(new Turn(0, 0), player1);
    this.game.turn(new Turn(1, 0), player2);

    console.log(this.gameBoard);
   }

  ngOnInit() {
    
  }

  get gameBoard() {
    return this.game.getGameBoard();
  }

}
