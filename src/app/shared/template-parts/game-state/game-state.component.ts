import { Component, OnInit, Input } from '@angular/core';
import { GameState } from '../../models/game-state';

@Component({
  selector: 'tic-game-state',
  templateUrl: './game-state.component.html',
  styleUrls: ['./game-state.component.scss']
})
export class GameStateComponent implements OnInit {

  @Input() state: GameState;

  constructor() { }

  ngOnInit() {
  }

  get end(): boolean {
    if(this.state.result) return true;

    return false;
  }

}
