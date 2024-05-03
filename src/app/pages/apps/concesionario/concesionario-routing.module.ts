import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcesionarioPrincipalComponent } from './components/concesionario-principal/concesionario-principal.component';


const routes: Routes=[
  {
    path:'',
    component:ConcesionarioPrincipalComponent

  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class ConcesionarioRoutingModule { }
