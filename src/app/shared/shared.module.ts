import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WowItemComponent } from './components/wow-item/wow-item.component';
import { WowItemTooltipComponent } from './components/wow-item-tooltip/wow-item-tooltip.component';


@NgModule({
  declarations: [

    WowItemComponent,
     WowItemTooltipComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WowItemComponent,
    WowItemTooltipComponent
  ]
})
export class SharedModule { }
