import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.view.routing';
import { HomeView } from './home.view';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomeView],
})
export class HomeViewModule {}
