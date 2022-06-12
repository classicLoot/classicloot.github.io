import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { WowItemLazyComponent } from './components/wow-item-lazy/wow-item-lazy.component';
import { WowItemTooltipComponent } from './components/wow-item-tooltip/wow-item-tooltip.component';
import { WowItemComponent } from './components/wow-item/wow-item.component';
import { ItemSubtextPipe } from './pipes/item-subtext.pipe';


@NgModule({
  declarations: [

    WowItemComponent,
    WowItemTooltipComponent,
    ItemSubtextPipe,
    SidebarItemComponent,
    SidebarMenuComponent,
    WowItemLazyComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    WowItemComponent,
    WowItemTooltipComponent,
    ItemSubtextPipe,
    SidebarItemComponent,
    SidebarMenuComponent,
    WowItemLazyComponent
  ]
})
export class SharedModule { }
