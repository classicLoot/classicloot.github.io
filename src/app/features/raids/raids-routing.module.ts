import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaidsComponent } from './raids/raids.component';

const routes: Routes = [
  {
    path: '',
    component: RaidsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaidsRoutingModule { }
