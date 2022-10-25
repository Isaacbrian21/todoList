import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TrashComponent } from './trash/trash.component';


const routes : Routes = [{
  path:'',
  component:TrashComponent
}]

@NgModule({
  declarations: [TrashComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TrashModule { }
