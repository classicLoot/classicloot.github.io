import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DungeonsRoutingModule } from './dungeons-routing.module';
import { DungeonsComponent } from './dungeons/dungeons.component';


@NgModule({
  declarations: [
    DungeonsComponent
  ],
  imports: [
    CommonModule,
    DungeonsRoutingModule
  ]
})
export class DungeonsModule { }
