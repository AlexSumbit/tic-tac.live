import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './template-parts/top-nav/top-nav.component';
import { RouterModule } from '@angular/router';
import { LogoComponent } from './template-parts/logo/logo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TopNavComponent,
    LogoComponent
  ],
  exports: [
    TopNavComponent,
    LogoComponent
  ]
})
export class SharedModule { }
