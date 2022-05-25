import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DungeonsComponent } from './dungeons/dungeons.component';

const routes: Routes = [
  {
    path: '',
    component: DungeonsComponent
  },
  {
    path: ':id',
    component: DungeonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DungeonsRoutingModule { }
