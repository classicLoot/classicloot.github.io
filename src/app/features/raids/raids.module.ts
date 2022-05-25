import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaidsRoutingModule } from './raids-routing.module';
import { RaidsComponent } from './raids/raids.component';


@NgModule({
  declarations: [
    RaidsComponent
  ],
  imports: [
    CommonModule,
    RaidsRoutingModule
  ]
})
export class RaidsModule { }
