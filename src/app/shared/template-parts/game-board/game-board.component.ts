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
  @Input() state;
  @Input() canTurn = true;

  @Output() onCellClick: EventEmitter<Turn> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  isWinnerCell(cell: Cell): boolean {
    let isWin: boolean = false;

    if(this.end && this.state.result.winCells) {
      let wc = this.state.result.winCells;
      wc.forEach(c => {
        if(cell == c) isWin = true;
      });
    } 

    return isWin;
  }

  cellClick(cell: Cell) {
    if(this.canTurn) {
      this.onCellClick.emit(new Turn(cell.x, cell.y));
    }
  }

  get end(): boolean {
    if(this.state.result) return true;

    return false;
  }

}
