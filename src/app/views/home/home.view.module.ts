import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';

import { HomeRoutingModule } from './home.view.routing';
import { HomeView } from './home.view';

import { HomeTransparentBgTextComponent } from './home-transparent-bg-text/home-transparent-bg-text.component';
import { HomeBrandsComponent } from './home-brands/home-brands.component';
import { HomeThreeBoxesComponent } from './home-three-boxes/home-three-boxes.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule,  InlineSVGModule.forRoot()],
  declarations: [HomeView, HomeTransparentBgTextComponent, HomeBrandsComponent, HomeThreeBoxesComponent],
})
export class HomeViewModule {}
