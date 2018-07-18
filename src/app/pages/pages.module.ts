import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PrelandComponent } from './preland/preland.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { GameComponent } from './game/game.component';
import { MainComponent } from './main/main.component';
import { PageComponent } from './page.component';

const routes: Routes = [
  { path: "", component: PrelandComponent, pathMatch: 'full' },
  { path: "about", component: AboutComponent },
  { path: "faq", component: FaqComponent },
  { path: "game", component: GameComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    PrelandComponent,
    AboutComponent,
    FaqComponent,
    GameComponent,
    MainComponent,
    PageComponent,
  ],
  exports: [
    PageComponent
  ]
})
export class PagesModule { }
