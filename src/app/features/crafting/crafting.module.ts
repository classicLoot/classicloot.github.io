import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CraftingRoutingModule } from './crafting-routing.module';
import { CraftingComponent } from './crafting/crafting.component';


@NgModule({
  declarations: [
    CraftingComponent
  ],
  imports: [
    CommonModule,
    CraftingRoutingModule
  ]
})
export class CraftingModule { }
