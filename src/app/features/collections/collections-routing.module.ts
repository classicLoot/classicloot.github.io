import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsStartComponent } from './collections-start/collections-start.component';
import { CollectionsComponent } from './collections/collections.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionsStartComponent
  },
  {
    path: ':id',
    component: CollectionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
