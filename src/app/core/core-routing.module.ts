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
        loadChildren: () => import('src/app/features/crafting/crafting.module').then(m => m.CraftingModule)
      },
      {
        path: 'dungeons',
        loadChildren: () => import('src/app/features/dungeons/dungeons.module').then(m => m.DungeonsModule)
      },
      {
        path: 'home',
        loadChildren: () => import('src/app/features/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'pvp',
        loadChildren: () => import('src/app/features/pvp/pvp.module').then(m => m.PvpModule)
      },
      {
        path: 'raids',
        loadChildren: () => import('src/app/features/raids/raids.module').then(m => m.RaidsModule)
      },
      {
        path: 'reputation',
        loadChildren: () => import('src/app/features/reputation/reputation.module').then(m => m.ReputationModule)
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
