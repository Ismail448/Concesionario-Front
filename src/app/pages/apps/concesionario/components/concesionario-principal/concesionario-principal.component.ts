import { Component, Input, ViewChild } from '@angular/core';
import { ModalService } from '@developer-partners/ngx-modal-dialog';
import { Concesionario } from '../../interfaces/Concesionario.model';
import { ConcesionarioService } from '../../services/Concesionario.service';
import { EditarConcesionarioComponent } from '../editar-concesionario/editar-concesionario.component';
import { EliminarConcesionarioComponent } from '../eliminar-concesionario/eliminar-concesionario.component';
import { NuevoConcesionarioComponent } from '../nuevo-concesionario/nuevo-concesionario.component';


@Component({
  selector: 'app-concesionario-principal',
  templateUrl: './concesionario-principal.component.html',

})
export class ConcesionarioPrincipalComponent {


  constructor(private concesionarioService: ConcesionarioService,
    private readonly modalService:ModalService
  ) { }


  @Input()
  concesionarios:Concesionario[] = [];

  public currentPage = 1;
  public pageSize = 5;

  get paginatedConcesionario() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.concesionarios.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  ngOnInit(): void {
    this.getConcesionarios();
  }

  getConcesionarios(): void {
    this.concesionarioService.getConcesionarios()
      .subscribe(concesionarios => this.concesionarios = concesionarios);
  }




  /*actualizarConcesionario(concesionario: Concesionario): void {
    this.modalService.show<Concesionario>()
  }*/

  editarConcesionario(concesionario: Concesionario): void {
    this.modalService.show<Concesionario>(EditarConcesionarioComponent, {
      title: 'Editar concesionario',
      model: concesionario,
    }).result().subscribe(editarConcesionario => {
      const index = this.concesionarios?.findIndex(g => g.id === concesionario.id)
      if (index !== -1) {
        this.concesionarios[index] = editarConcesionario;
      }
    })
  }

  eliminarConcesionario(concesionario: Concesionario): void {
    this.modalService.show<Concesionario>(EliminarConcesionarioComponent, {
      title: 'Borrar Biblioteca',
      model: concesionario,
    }).result().subscribe(borrarConcesionario => {
      const index = this.concesionarios?.findIndex(i => i.id === concesionario.id);
      if (index !== -1) {
        this.concesionarios[index] = borrarConcesionario;
      }
    });
  }

  crearElConcesionario():void {
    this.modalService.show<Concesionario>(NuevoConcesionarioComponent,{
      title:'Crear Marca'
    }).result()
    .subscribe(nuevoConcesionario =>{
      this.concesionarios?.push(nuevoConcesionario)
    })
    }

  /*ngOnInit2(): void {
    this.buscarConcesionariosPaginados();
  }

  pageOfConcesionarios: Page<Concesionario> | undefined;

  buscarConcesionariosPaginados() {
    this.concesionarioService.buscarConcesionariosPaginados(this.page)
      .subscribe(
        data => {
          this.concesionariosPaginado = data.content;
          this.totalConcesionarios = data.totalElements;
        },
        error => {
          console.error('Error al obtener los concesionarios:', error);
        }
      );
  }

  onPageChange(page: number) {
    this.page = page;
    this.buscarConcesionariosPaginados();
  }*/
}
