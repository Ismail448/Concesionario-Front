import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModeloPrincipalComponent } from './components/modelo-principal/modelo-principal.component';


const routes: Routes=[
  {
    path:'',
    component: ModeloPrincipalComponent

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
export class ModeloRoutingModule { }
