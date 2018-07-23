import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './template-parts/top-nav/top-nav.component';
import { RouterModule } from '@angular/router';
import { LogoComponent } from './template-parts/logo/logo.component';
import { GameStateComponent } from './template-parts/game-state/game-state.component';
import { GameBoardComponent } from './template-parts/game-board/game-board.component';
import { TwoPlayersService } from './services/two-players.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TopNavComponent,
    LogoComponent,
    GameStateComponent,
    GameBoardComponent
  ],
  exports: [
    TopNavComponent,
    LogoComponent,
    GameStateComponent,
    GameBoardComponent
  ],
  providers: [
    
  ]
})
export class SharedModule { }
