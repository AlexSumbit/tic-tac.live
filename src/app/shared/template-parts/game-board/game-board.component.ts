import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Turn } from '../../models/turn';
import { Cell } from '../../models/cell';

@Component({
  selector: 'tic-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  @Input() board;

  @Output() onCellClick: EventEmitter<Turn> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  cellClick(cell: Cell) {
    this.onCellClick.emit(new Turn(cell.x, cell.y));
  }

}
