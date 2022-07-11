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
        path: 'crafting',
        loadChildren: () => import('src/app/features/collections/collections.module').then(m => m.CollectionsModule)
      },
      {
        path: 'collections',
        loadChildren: () => import('src/app/features/collections/collections.module').then(m => m.CollectionsModule)
      },
      {
        path: 'dungeons',
        loadChildren: () => import('src/app/features/instance/instance.module').then(m => m.InstanceModule)
      },
      {
        path: 'home',
        loadChildren: () => import('src/app/features/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'pvp',
        loadChildren: () => import('src/app/features/collections/collections.module').then(m => m.CollectionsModule)
      },
      {
        path: 'raids',
        loadChildren: () => import('src/app/features/instance/instance.module').then(m => m.InstanceModule)
      },
      {
        path: 'reputation',
        loadChildren: () => import('src/app/features/collections/collections.module').then(m => m.CollectionsModule)
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
