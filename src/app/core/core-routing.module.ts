import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [

      {
        path: '',
        redirectTo: 'home'
      },

      {
        path: 'Crafting',
        loadChildren: () => import('src/app/features/collectionsx/collectionsx.module').then(m => m.CollectionsxModule)
      },
      {
        path: 'Collections',
        loadChildren: () => import('src/app/features/collectionsx/collectionsx.module').then(m => m.CollectionsxModule)
      },
      {
        path: 'Dungeons',
        loadChildren: () => import('src/app/features/collectionsx/collectionsx.module').then(m => m.CollectionsxModule)
      },
      {
        path: 'home',
        loadChildren: () => import('src/app/features/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'PVP',
        loadChildren: () => import('src/app/features/collectionsx/collectionsx.module').then(m => m.CollectionsxModule)
      },
      {
        path: 'Raids',
        loadChildren: () => import('src/app/features/collectionsx/collectionsx.module').then(m => m.CollectionsxModule)
      },
      {
        path: 'Reputation',
        loadChildren: () => import('src/app/features/collectionsx/collectionsx.module').then(m => m.CollectionsxModule)
      },
      {
        path: '*',
        redirectTo: 'home'
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
