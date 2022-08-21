import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NbCardModule, NbIconModule } from '@nebular/theme';
import { SharedModule } from 'src/app/shared/shared.module';
import { CollectionCardComponent } from './collection-card/collection-card.component';
import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsStartCComponent } from './collections-start-c/collections-start-c.component';
import { CollectionsStartComponent } from './collections-start/collections-start.component';
import { CollectionsComponent } from './collections/collections.component';
import { CraftingStartComponent } from './crafting-start/crafting-start.component';
import { PvpStartComponent } from './pvp-start/pvp-start.component';
import { ReputationStartComponent } from './reputation-start/reputation-start.component';


@NgModule({
  declarations: [
    CollectionsComponent,
    CollectionsStartComponent,
    CollectionCardComponent,
    ReputationStartComponent,
    CraftingStartComponent,
    PvpStartComponent,
    CollectionsStartCComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule,
    NbCardModule,
    NbIconModule,
  ]
})
export class CollectionsModule { }
