import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeView } from './home.view';

const routes = [
  {
    path: '',
    component: HomeView,
  },
] as Routes;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
