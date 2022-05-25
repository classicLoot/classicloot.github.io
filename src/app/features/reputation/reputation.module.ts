import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReputationRoutingModule } from './reputation-routing.module';
import { ReputationComponent } from './reputation/reputation.component';


@NgModule({
  declarations: [
    ReputationComponent
  ],
  imports: [
    CommonModule,
    ReputationRoutingModule
  ]
})
export class ReputationModule { }
