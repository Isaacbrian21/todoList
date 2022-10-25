import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'trash', loadChildren : () => import('./modules/trash.module').then(trash =>trash.TrashModule)},
  { path: 'home', loadChildren: () => import('./modules/home/home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
