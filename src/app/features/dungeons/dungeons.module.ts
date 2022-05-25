import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DungeonsRoutingModule } from './dungeons-routing.module';
import { DungeonsComponent } from './dungeons/dungeons.component';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [
    DungeonsComponent
  ],
  imports: [
    CommonModule,
    DungeonsRoutingModule,
    NbCardModule
  ]
})
export class DungeonsModule { }
