import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbButtonModule, NbIconModule, NbLayoutModule, NbMenuModule, NbSidebarModule } from '@nebular/theme';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    NbIconModule,
    NbButtonModule,
    SharedModule,
  ]
})
export class CoreModule { }
