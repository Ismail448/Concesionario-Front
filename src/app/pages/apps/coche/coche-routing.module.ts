import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CochePrincipalComponent } from './components/coche-principal/coche-principal.component';


const routes: Routes=[
  {
    path:'',
    component: CochePrincipalComponent

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
export class CocheRoutingModule { }
