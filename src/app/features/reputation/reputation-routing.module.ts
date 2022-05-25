import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReputationComponent } from './reputation/reputation.component';

const routes: Routes = [
  {
    path: '',
    component: ReputationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReputationRoutingModule { }
