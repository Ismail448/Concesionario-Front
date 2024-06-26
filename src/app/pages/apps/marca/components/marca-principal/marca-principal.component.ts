/*import { Component, Input } from '@angular/core';
import { Marca } from '../../interfaces/marca.model';
import { ModalService } from '@developer-partners/ngx-modal-dialog';
import { MarcaService } from '../../services/marca.service';
import { NuevaMarcaComponent } from '../nueva-marca/nueva-marca.component';
import { EliminarMarcaComponent } from '../eliminar-marca/eliminar-marca.component';
import { EditarMarcaComponent } from '../editar-marca/editar-marca.component';

@Component({
  selector: 'app-marca-principal',
  templateUrl: './marca-principal.component.html',
  styleUrls: [

  ]
})
export class MarcaPrincipalComponent {

  @Input()
  marcas:Marca[] = [];

  constructor(private marcaService: MarcaService,
    private readonly modalService:ModalService
  ) { }

  public currentPage = 1;
  public pageSize = 5;

  get paginatedMarca() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.marcas.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }
  ngOnInit(): void {
    this.getConcesionarios();
  }

  getConcesionarios(): void {
    this.marcaService.getMarcas()
      .subscribe(marcas => this.marcas = marcas);
  }

  eliminarMarca(marca: Marca): void {
    this.modalService.show<Marca>(EliminarMarcaComponent, {
      title: 'Eliminar Marca',
      model: marca,
    }).result().subscribe(borrarMarca => {
      const index = this.marcas?.findIndex(i => i.id === marca.id);
      if (index !== -1) {
        this.marcas[index] = borrarMarca;
      }
    });
  }

  crearLaMarca():void {
    this.modalService.show<Marca>(NuevaMarcaComponent,{
      title:'Crear Marca'
    }).result()
    .subscribe(nuevaMarca =>{
      this.marcas?.push(nuevaMarca)
    })
    }

    editarMarca(marca: Marca): void {
      this.modalService.show<Marca>(EditarMarcaComponent, {
        title: 'Editar marca',
        model: marca,
      }).result().subscribe(editarConcesionario => {
        const index = this.marcas?.findIndex(g => g.id === marca.id)
        if (index !== -1) {
          this.marcas[index] = editarConcesionario;
        }
      })
    }
}*/

// marca-principal.component.ts
import { Component, OnInit } from '@angular/core';
import { Marca } from '../../interfaces/marca.model';
import { MarcaService } from '../../services/marca.service';
import { ModalService } from '@developer-partners/ngx-modal-dialog';
import { MarcaStateService } from '../../services/marca-state.service';
import { EliminarMarcaComponent } from '../eliminar-marca/eliminar-marca.component';
import { NuevaMarcaComponent } from '../nueva-marca/nueva-marca.component';
import { EditarMarcaComponent } from '../editar-marca/editar-marca.component';

@Component({
  selector: 'app-marca-principal',
  templateUrl: './marca-principal.component.html',
  styleUrls: []
})
export class MarcaPrincipalComponent implements OnInit {
  marcas: Marca[] = [];
  public currentPage = 1;
  public pageSize = 5;

  constructor(
    private marcaService: MarcaService,
    private marcaStateService: MarcaStateService,
    private readonly modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.getMarcas();
    this.marcaStateService.getMarcas().subscribe(marcas => {
      this.marcas = marcas;
    });
  }

  get paginatedMarca() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.marcas.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  getMarcas(): void {
    this.marcaService.getMarcas().subscribe(marcas => this.marcas = marcas);
  }

  eliminarMarca(marca: Marca): void {
    this.modalService.show<Marca>(EliminarMarcaComponent, {
      title: 'Eliminar Marca',
      model: marca,
    }).result().subscribe(borrarMarca => {
      const index = this.marcas?.findIndex(i => i.id === marca.id);
      if (index !== -1) {
        this.marcas.splice(index, 1);
      }
    });
  }

  crearLaMarca(): void {
    this.modalService.show<Marca>(NuevaMarcaComponent, {
      title: 'Crear Marca'
    }).result().subscribe(nuevaMarca => {
      this.marcas?.push(nuevaMarca);
    });
  }

  editarMarca(marca: Marca): void {
    this.modalService.show<Marca>(EditarMarcaComponent, {
      title: 'Editar marca',
      model: marca,
    }).result().subscribe(editarConcesionario => {
      const index = this.marcas?.findIndex(g => g.id === marca.id);
      if (index !== -1) {
        this.marcas[index] = editarConcesionario;
      }
    });
  }
}

