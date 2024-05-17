import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CochePrincipalComponent } from './components/coche-principal/coche-principal.component';
import { EditarCocheComponent } from './components/editar-coche/editar-coche.component';
import { EliminarCocheComponent } from './components/eliminar-coche/eliminar-coche.component';
import { NuevoCocheComponent } from './components/nuevo-coche/nuevo-coche.component';
import { CocheRoutingModule } from './coche-routing.module';



@NgModule({
  declarations: [
    CochePrincipalComponent,
    EditarCocheComponent,
    EliminarCocheComponent,
    NuevoCocheComponent
  ],
  imports: [
    CommonModule,
    CocheRoutingModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule
  ],
  exports: []
})
export class CocheModule { }
