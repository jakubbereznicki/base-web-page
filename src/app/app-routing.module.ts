import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent, MainLayoutModule } from './layouts/main-layout';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
        {
        path: '',
        loadChildren: () => import('./views/home/home.view.module').then((m) => m.HomeViewModule),
      },
    ]
  }
] as Routes;

@NgModule({
  imports: [
    MainLayoutModule,

    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
