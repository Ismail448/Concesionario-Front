import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModeloRoutingModule } from './modelo-routing.module';
import { ModeloPrincipalComponent } from './components/modelo-principal/modelo-principal.component';
import { NuevoModeloComponent } from './components/nuevo-modelo/nuevo-modelo.component';
import { EliminarModeloComponent } from './components/eliminar-modelo/eliminar-modelo.component';


@NgModule({
  declarations: [
    ModeloPrincipalComponent,
    NuevoModeloComponent,
    EliminarModeloComponent
  ],
  imports: [
    CommonModule,
    ModeloRoutingModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule
  ],
  exports: []
})
export class ModeloModule { }
