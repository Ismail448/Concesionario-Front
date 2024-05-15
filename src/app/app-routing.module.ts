import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('src/app/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },
      {
        path: 'concesionario',
        loadChildren: () => import('./pages/apps/concesionario/concesionario.module').then(m => m.ConcesionarioModule)
      },
      {
        path: 'marca',
        loadChildren: () => import('./pages/apps/marca/marca.module').then(m => m.MarcaModule)
      },
      {
        path: 'modelo',
        loadChildren: () => import('./pages/apps/modelo/modelo.module').then(m => m.ModeloModule)
      },
      {
        path: 'coche',
        loadChildren: () => import('./pages/apps/coche/coche.module').then(c => c.CocheModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(Approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
