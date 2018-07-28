import { Component, OnInit } from '@angular/core';
import { GameService } from '../../shared/services/game.service';
import { TwoPlayersService } from '../../shared/services/two-players.service';
import { Player } from '../../shared/models/player';
import { Turn } from '../../shared/models/turn';
import { Router, NavigationEnd } from '@angular/router';
import { WithComputerService } from '../../shared/services/with-computer.service';

@Component({
  selector: 'tic-with-computer',
  templateUrl: './with-computer.component.html',
  styleUrls: ['./with-computer.component.scss'],
  providers: [
    GameService,
    WithComputerService
  ]
})
export class WithComputerComponent implements OnInit {

  public isPlayerSelect: boolean = false;

  player: Player;
  computer: Player;

  constructor(
    private game: GameService,
    private withComputer: WithComputerService,
    private router: Router
  ) {
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

  selectPlayer(role: string) {
    let players;

    switch(role) {
      case "X": 
        this.player = new Player("player", "X");
        this.computer = new Player("computer", "O");
        players = [this.computer, this.player];
        break;
      case "O":
        this.player = new Player("player", "O");
        this.computer = new Player("computer", "X");
        players = [this.player, this.computer];
        break;
    }

    this.game.initGame(players, "With computer");
    this.isPlayerSelect = true;

    if(role == "X") this.computerTurn();
  }

  computerTurn() {
    setTimeout(() => {
      let cell = this.withComputer.getCellForTurn();
      
      if(cell) {
        this.turn(new Turn(cell.x, cell.y));
      }
    }, 500);
  }

  turn(turn: Turn) {
    if(!this.gameState.result) {
      this.game.turn(turn);

      if(this.gameState.currentPlayer == this.computer) this.computerTurn();
    }
  }

  get gameBoard() {
    return this.game.getGameBoard();
  }

  get gameState() {
    return this.game.getGameState();
  }

  get canTurn() {
    return this.gameState.currentPlayer == this.player;
  }

}
