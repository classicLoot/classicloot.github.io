import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaidsRoutingModule } from './raids-routing.module';
import { RaidsComponent } from './raids/raids.component';
import { RaidsStartComponent } from './raids-start/raids-start.component';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { SharedModule } from 'src/app/shared/shared.module';
import { RaidbossLazyComponent } from './raidboss-lazy/raidboss-lazy.component';


@NgModule({
  declarations: [
    RaidsComponent,
    RaidsStartComponent,
    RaidbossLazyComponent
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
