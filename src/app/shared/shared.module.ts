import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbButtonGroupModule, NbButtonModule, NbIconModule, NbSelectModule } from '@nebular/theme';
import { FilterButtonsComponent } from './components/filter-buttons/filter-buttons.component';
import { FilterClassComponent } from './components/filter-class/filter-class.component';
import { OptionsButtonsComponent } from './components/options-buttons/options-buttons.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { WowAchievementComponent } from './components/wow-achievement/wow-achievement.component';
import { WowItemLazyComponent } from './components/wow-item-lazy/wow-item-lazy.component';
import { WowItemTooltipComponent } from './components/wow-item-tooltip/wow-item-tooltip.component';
import { WowItemComponent } from './components/wow-item/wow-item.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ItemSubtextPipe } from './pipes/item-subtext.pipe';

@NgModule({
  declarations: [

    WowItemComponent,
    WowItemTooltipComponent,
    ItemSubtextPipe,
    SidebarItemComponent,
    SidebarMenuComponent,
    WowItemLazyComponent,
    WowAchievementComponent,
    OptionsButtonsComponent,
    FilterButtonsComponent,
    FilterPipe,
    FilterClassComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NbIconModule,
    NbButtonGroupModule,
    NbButtonModule,
    NbSelectModule
  ],
  exports: [
    WowItemComponent,
    WowItemTooltipComponent,
    ItemSubtextPipe,
    SidebarItemComponent,
    SidebarMenuComponent,
    WowItemLazyComponent,
    WowAchievementComponent,
    OptionsButtonsComponent,
    FilterButtonsComponent,
    FilterPipe,
    FilterClassComponent
  ]
})
export class SharedModule { }
