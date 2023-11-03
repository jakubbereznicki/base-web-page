import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainLayoutComponent } from './main-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MainLayoutComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, RouterModule, HttpClientModule, InlineSVGModule.forRoot()],
})
export class MainLayoutModule {}
