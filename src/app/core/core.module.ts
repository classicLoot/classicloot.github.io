import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NbLayoutModule,
    NbSidebarModule
  ]
})
export class CoreModule { }
