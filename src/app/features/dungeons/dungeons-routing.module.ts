import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DungeonsStartComponent } from './dungeons-start/dungeons-start.component';
import { DungeonsComponent } from './dungeons/dungeons.component';

const routes: Routes = [
  {
    path: '',
    component: DungeonsStartComponent
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
