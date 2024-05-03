import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { EliminarConcesionarioComponent } from './components/eliminar-concesionario/eliminar-concesionario.component';
import { ConcesionarioPrincipalComponent } from './components/concesionario-principal/concesionario-principal.component';
import { EditarConcesionarioComponent } from './components/editar-concesionario/editar-concesionario.component';
import { NuevoConcesionarioComponent } from './components/nuevo-concesionario/nuevo-concesionario.component';
import { ConcesionarioRoutingModule } from './concesionario-routing.module';

@NgModule({
  declarations: [
    ConcesionarioPrincipalComponent,
    EditarConcesionarioComponent,
    EliminarConcesionarioComponent,
    NuevoConcesionarioComponent
  ],
  imports: [
    CommonModule,
    ConcesionarioRoutingModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule
  ],
  exports: []
})
export class ConcesionarioModule { }
