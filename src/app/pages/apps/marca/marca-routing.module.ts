import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcaPrincipalComponent } from './components/marca-principal/marca-principal.component';


const routes: Routes=[
  {
    path:'',
    component: MarcaPrincipalComponent

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
export class MarcaRoutingModule { }
