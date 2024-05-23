import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { EliminarConcesionarioComponent } from './components/eliminar-concesionario/eliminar-concesionario.component';
import { ConcesionarioPrincipalComponent } from './components/concesionario-principal/concesionario-principal.component';
import { EditarConcesionarioComponent } from './components/editar-concesionario/editar-concesionario.component';
import { NuevoConcesionarioComponent } from './components/nuevo-concesionario/nuevo-concesionario.component';
import { ConcesionarioRoutingModule } from './concesionario-routing.module';
import { SearchConcesionarioComponent } from './components/search-concesionario/search-concesionario.component';

@NgModule({
  declarations: [
    ConcesionarioPrincipalComponent,
    EditarConcesionarioComponent,
    EliminarConcesionarioComponent,
    NuevoConcesionarioComponent,
    SearchConcesionarioComponent
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
