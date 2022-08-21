import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsxComponent } from './collectionsx/collectionsx.component';

const routes: Routes = [
  {
    path: ':id',
    component: CollectionsxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsxRoutingModule { }
