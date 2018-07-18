import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'tic-preland',
  templateUrl: './preland.component.html',
  styleUrls: ['./preland.component.scss'],
  animations: [
    trigger('showHide', [
      transition('void => *', [
        style({
          transform: 'translateY(200px)',
          opacity: '0'
        }),
        animate("0.5s ease-out")
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class PrelandComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
