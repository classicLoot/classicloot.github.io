import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NbCardModule, NbIconModule } from '@nebular/theme';
import { SharedModule } from 'src/app/shared/shared.module';
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
    InstanceRoutingModule,
    NbCardModule,
    NbIconModule,
    SharedModule
  ]
})
export class InstanceModule { }
