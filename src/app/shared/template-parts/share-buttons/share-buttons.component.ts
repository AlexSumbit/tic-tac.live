import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tic-share-buttons',
  templateUrl: './share-buttons.component.html',
  styleUrls: ['./share-buttons.component.scss']
})
export class ShareButtonsComponent implements OnInit {

  public url: string = 'tic-tac.live';

  private _windowParams = 'toolbar=0,status=0,width=626,height=436';

  constructor() { }

  ngOnInit() {
  }

  facebook() {
    let shareLink = `https://www.facebook.com/sharer/sharer.php?u=${this.url}`

    window.open(shareLink, 'sharer', this._windowParams);
  }

  google() {
    let shareLink = `https://plus.google.com/share?url=${this.url}`

    window.open(shareLink, 'sharer', this._windowParams);
  }

  twitter() {
    let tweet = encodeURI('tic-tac.live - best game ever!');
    let shareLink = `https://twitter.com/intent/tweet?text=${tweet}&hashtags=TicTacToe`;

    window.open(shareLink, 'sharer', this._windowParams);
  }

}
