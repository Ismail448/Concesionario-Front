import { CommonModule, NgFor } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgbModule, NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { MarcaRoutingModule } from "./marca-routing.module";
import { NgModule } from "@angular/core";
import { MarcaPrincipalComponent } from "./components/marca-principal/marca-principal.component";
import { NuevaMarcaComponent } from "./components/nueva-marca/nueva-marca.component";
import { EditarMarcaComponent } from './components/editar-marca/editar-marca.component';
import { EliminarMarcaComponent } from './components/eliminar-marca/eliminar-marca.component';
import { SearchMarcaComponent } from './components/search-marca/search-marca.component';


@NgModule({
  declarations: [
    MarcaPrincipalComponent,
    NuevaMarcaComponent,
    EditarMarcaComponent,
    EliminarMarcaComponent,
    SearchMarcaComponent

  ],
  imports: [
    CommonModule,
    NgbModule,
    MarcaRoutingModule,
    NgFor,
    FormsModule,
    NgbPaginationModule

  ],
  exports: [

  ]
})
export class MarcaModule { }
