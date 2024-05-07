import { Component, Input } from '@angular/core';
import { Marca } from '../../interfaces/marca.model';
import { ModalService } from '@developer-partners/ngx-modal-dialog';
import { MarcaService } from '../../services/marca.service';
import { NuevaMarcaComponent } from '../nueva-marca/nueva-marca.component';
import { EliminarMarcaComponent } from '../eliminar-marca/eliminar-marca.component';

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
}
