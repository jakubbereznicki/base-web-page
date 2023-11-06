import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.view.routing';
import { HomeView } from './home.view';

import { HomeTransparentBgTextComponent } from './home-transparent-bg-text/home-transparent-bg-text.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomeView, HomeTransparentBgTextComponent],
})
export class HomeViewModule {}
