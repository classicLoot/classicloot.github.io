import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaidsStartComponent } from './raids-start/raids-start.component';
import { RaidsComponent } from './raids/raids.component';

const routes: Routes = [
  {
    path: '',
    component: RaidsStartComponent
  },
  {
    path: ':id',
    component: RaidsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaidsRoutingModule { }
