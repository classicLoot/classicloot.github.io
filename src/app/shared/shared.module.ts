import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WowItemComponent } from './components/wow-item/wow-item.component';



@NgModule({
  declarations: [
    WowItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WowItemComponent
  ]
})
export class SharedModule { }
