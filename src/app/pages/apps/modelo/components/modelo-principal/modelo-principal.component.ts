import { Component, Input, OnInit } from '@angular/core';
import { ModeloService } from '../../service/modelo.service';
import { ModalService } from '@developer-partners/ngx-modal-dialog';
import { Modelo } from '../../interfaces/Modelo.model';
import { NuevoModeloComponent } from '../nuevo-modelo/nuevo-modelo.component';
import { EliminarModeloComponent } from '../eliminar-modelo/eliminar-modelo.component';
import { EditarModeloComponent } from '../editar-modelo/editar-modelo.component';
import { ModeloStateService } from '../../service/modelo-state.service';

@Component({
  selector: 'app-modelo-principal',
  templateUrl: './modelo-principal.component.html',
  styleUrls: []
})
/*export class ModeloPrincipalComponent {

  constructor(private modeloService: ModeloService,
    private readonly modalService:ModalService
  ) { }


  @Input()
  modelos:Modelo[] = [];

  public currentPage = 1;
  public pageSize = 5;

  get paginatedModelo() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.modelos.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  ngOnInit(): void {
    this.getModelos();
  }

  getModelos(): void {
    this.modeloService.getModelos()
      .subscribe(modelos => this.modelos = modelos);
  }

  crearElModelo():void {
    this.modalService.show<Modelo>(NuevoModeloComponent,{
      title:'Crear Modelo'
    }).result()
    .subscribe(nuevoModelo =>{
      this.modelos?.push(nuevoModelo)
    })
    }

    editarModelo(modelo: Modelo): void {
      this.modalService.show<Modelo>(EditarModeloComponent, {
        title: 'Editar Modelo',
        model: modelo,
      }).result().subscribe(modeloEditado => {
        if (modeloEditado) {
          const index = this.modelos?.findIndex(i => i.id === modelo.id);
          if (index !== -1) {
            this.modelos[index] = modeloEditado;
          }
        }
      });
    }

    eliminarModelo(modelo: Modelo): void {
      this.modalService.show<Modelo>(EliminarModeloComponent, {
        title: 'Eliminar Modelo',
        model: modelo,
      }).result().subscribe(() => {
        this.getModelos(); // Actualizar la lista de modelos después de eliminar
      });
    }
  }*/
  export class ModeloPrincipalComponent implements OnInit {
    modelos: Modelo[] = [];
    public currentPage = 1;
    public pageSize = 5;

    constructor(
      private modeloService: ModeloService,
      private modeloStateService: ModeloStateService,
      private readonly modalService: ModalService
    ) {}

    ngOnInit(): void {
      this.getModelos();
      this.modeloStateService.getModelos().subscribe(modelos => {
        this.modelos = modelos;
      });
    }

    get paginatedModelo() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      return this.modelos.slice(startIndex, startIndex + this.pageSize);
    }

    onPageChange(page: number) {
      this.currentPage = page;
    }

    getModelos(): void {
      this.modeloService.getModelos().subscribe(modelos => this.modelos = modelos);
    }

    eliminarModelo(modelo: Modelo): void {
      this.modalService.show<Modelo>(EliminarModeloComponent, {
        title: 'Eliminar Modelo',
        model: modelo,
      }).result().subscribe(borrarModelo => {
        const index = this.modelos?.findIndex(i => i.id === modelo.id);
        if (index !== -1) {
          this.modelos.splice(index, 1);
        }
      });
    }

    crearModelo(): void {
      this.modalService.show<Modelo>(NuevoModeloComponent, {
        title: 'Crear Modelo'
      }).result().subscribe(nuevoModelo => {
        this.modelos?.push(nuevoModelo);
      });
    }

    editarModelo(modelo: Modelo): void {
      this.modalService.show<Modelo>(EditarModeloComponent, {
        title: 'Editar Modelo',
        model: modelo,
      }).result().subscribe(editarModelo => {
        const index = this.modelos?.findIndex(g => g.id === modelo.id);
        if (index !== -1) {
          this.modelos[index] = editarModelo;
        }
      });
    }
  }
