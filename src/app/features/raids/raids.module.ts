import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaidsRoutingModule } from './raids-routing.module';
import { RaidsComponent } from './raids/raids.component';
import { RaidsStartComponent } from './raids-start/raids-start.component';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RaidsComponent,
    RaidsStartComponent
  ],
  imports: [
    CommonModule,
    RaidsRoutingModule,
    NbCardModule,
    NbIconModule,
    SharedModule
  ]
})
export class RaidsModule { }
