import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NbLayoutModule, NbMenuModule, NbSidebarModule } from '@nebular/theme';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    SharedModule
  ]
})
export class CoreModule { }
