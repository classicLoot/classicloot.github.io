import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WowItemComponent } from './components/wow-item/wow-item.component';
import { WowItemTooltipComponent } from './components/wow-item-tooltip/wow-item-tooltip.component';
import { ItemSubtextPipe } from './pipes/item-subtext.pipe';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { RouterModule } from '@angular/router';
import { WowItemLazyComponent } from './components/wow-item-lazy/wow-item-lazy.component';


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
