import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PvpComponent } from './pvp/pvp.component';

const routes: Routes = [
  {
    path: '',
    component: PvpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PvpRoutingModule { }
