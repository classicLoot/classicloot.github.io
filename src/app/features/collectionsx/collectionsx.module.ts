import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NbCardModule, NbIconModule } from '@nebular/theme';
import { SharedModule } from 'src/app/shared/shared.module';
import { CollectionsxRoutingModule } from './collectionsx-routing.module';
import { CollectionsxComponent } from './collectionsx/collectionsx.component';
import { CollectionxCardComponent } from './collectionx-card/collectionx-card.component';

@NgModule({
  declarations: [
    CollectionsxComponent,
    CollectionxCardComponent
  ],
  imports: [
    CommonModule,
    CollectionsxRoutingModule,
    SharedModule,
    NbCardModule,
    NbIconModule,
  ]
})
export class CollectionsxModule { }
