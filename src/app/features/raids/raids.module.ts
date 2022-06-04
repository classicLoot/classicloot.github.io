import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaidsRoutingModule } from './raids-routing.module';
import { RaidsComponent } from './raids/raids.component';
import { RaidsStartComponent } from './raids-start/raids-start.component';


@NgModule({
  declarations: [
    RaidsComponent,
    RaidsStartComponent
  ],
  imports: [
    CommonModule,
    RaidsRoutingModule
  ]
})
export class RaidsModule { }
