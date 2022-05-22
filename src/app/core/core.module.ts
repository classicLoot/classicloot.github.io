import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NbLayoutModule } from '@nebular/theme';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NbLayoutModule
  ]
})
export class CoreModule { }
