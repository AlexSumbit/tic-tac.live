import { Component, OnInit } from '@angular/core';
import { GameService } from '../../shared/services/game.service';
import { TwoPlayersService } from '../../shared/services/two-players.service';
import { Player } from '../../shared/models/player';
import { Turn } from '../../shared/models/turn';
import { Router, NavigationEnd } from '@angular/router';

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
    private game: GameService,
    private router: Router
  ) {
    let player1 = new Player("player 1", "X");
    let player2 = new Player("player 2", "O");

    this.game.initGame([player1, player2], "Two players");

    this.overrideRouterStrategy();
  }

  ngOnInit() {
    
  }

  overrideRouterStrategy() {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
  }

  turn(turn: Turn) {
    if(!this.gameState.result) {
      this.game.turn(turn);
    }
  }

  get gameBoard() {
    return this.game.getGameBoard();
  }

  get gameState() {
    return this.game.getGameState();
  }

}
