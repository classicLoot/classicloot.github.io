import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DungeonsRoutingModule } from './dungeons-routing.module';
import { DungeonsComponent } from './dungeons/dungeons.component';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DungeonsComponent
  ],
  imports: [
    CommonModule,
    DungeonsRoutingModule,
    NbCardModule,
    NbIconModule,
    SharedModule
  ]
})
export class DungeonsModule { }
