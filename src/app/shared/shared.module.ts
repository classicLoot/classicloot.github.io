import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WowItemComponent } from './components/wow-item/wow-item.component';
import { WowItemTooltipComponent } from './components/wow-item-tooltip/wow-item-tooltip.component';
import { ItemSubtextPipe } from './pipes/item-subtext.pipe';


@NgModule({
  declarations: [

    WowItemComponent,
    WowItemTooltipComponent,
    ItemSubtextPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WowItemComponent,
    WowItemTooltipComponent,
    ItemSubtextPipe
  ]
})
export class SharedModule { }
