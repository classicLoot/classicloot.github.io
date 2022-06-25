import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NbCardModule, NbIconModule } from '@nebular/theme';
import { SharedModule } from 'src/app/shared/shared.module';
import { CollectionCardComponent } from './collection-card/collection-card.component';
import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsStartComponent } from './collections-start/collections-start.component';
import { CollectionsComponent } from './collections/collections.component';


@NgModule({
  declarations: [
    CollectionsComponent,
    CollectionsStartComponent,
    CollectionCardComponent
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
