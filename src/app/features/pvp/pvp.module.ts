import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PvpRoutingModule } from './pvp-routing.module';
import { PvpComponent } from './pvp/pvp.component';


@NgModule({
  declarations: [
    PvpComponent
  ],
  imports: [
    CommonModule,
    PvpRoutingModule
  ]
})
export class PvpModule { }
