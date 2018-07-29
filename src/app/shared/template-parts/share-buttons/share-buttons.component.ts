import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tic-share-buttons',
  templateUrl: './share-buttons.component.html',
  styleUrls: ['./share-buttons.component.scss']
})
export class ShareButtonsComponent implements OnInit {

  public url: string = 'tic-tac.live';

  constructor() { }

  ngOnInit() {
  }

}
