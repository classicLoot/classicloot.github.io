import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstanceRoutingModule } from './instance-routing.module';
import { InstanceStartComponent } from './instance-start/instance-start.component';
import { InstanceComponent } from './instance/instance.component';


@NgModule({
  declarations: [
    InstanceStartComponent,
    InstanceComponent
  ],
  imports: [
    CommonModule,
    InstanceRoutingModule
  ]
})
export class InstanceModule { }
