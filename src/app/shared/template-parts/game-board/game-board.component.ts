import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tic-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  @Input() board;

  constructor() { }

  ngOnInit() {
  }

}
