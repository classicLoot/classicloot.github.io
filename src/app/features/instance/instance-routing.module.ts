import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstanceGuard } from 'src/app/shared/guards/instance.guard';
import { InstanceStartComponent } from './instance-start/instance-start.component';
import { InstanceComponent } from './instance/instance.component';

const routes: Routes = [
  {
    path: '',
    component: InstanceStartComponent
  },
  {
    path: ':id',
    component: InstanceComponent,
    canActivate: [InstanceGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstanceRoutingModule { }
