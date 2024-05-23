/*import { Component, Input, ViewChild } from '@angular/core';
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

  concesionarioFiltros:Concesionario[]=[]
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

}*/

/*import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '@developer-partners/ngx-modal-dialog';
import { Concesionario } from '../../interfaces/Concesionario.model';
import { ConcesionarioService } from '../../services/Concesionario.service';
import { ConcesionarioStateService } from '../../services/concesionario-state.service';
import { EditarConcesionarioComponent } from '../editar-concesionario/editar-concesionario.component';
import { EliminarConcesionarioComponent } from '../eliminar-concesionario/eliminar-concesionario.component';
import { NuevoConcesionarioComponent } from '../nuevo-concesionario/nuevo-concesionario.component';

@Component({
  selector: 'app-concesionario-principal',
  templateUrl: './concesionario-principal.component.html',
})
export class ConcesionarioPrincipalComponent implements OnInit {

  constructor(
    private concesionarioService: ConcesionarioService,
    private concesionarioStateService: ConcesionarioStateService,
    private readonly modalService: ModalService
  ) { }

  concesionarios: Concesionario[] = [];
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
    this.concesionarioStateService.concesionarios$.subscribe(concesionarios => {
      this.concesionarios = concesionarios;
    });
  }

  getConcesionarios(): void {
    this.concesionarioService.getConcesionarios()
      .subscribe(concesionarios => this.concesionarios = concesionarios);
  }

  editarConcesionario(concesionario: Concesionario): void {
    this.modalService.show<Concesionario>(EditarConcesionarioComponent, {
      title: 'Editar concesionario',
      model: concesionario,
    }).result().subscribe(editarConcesionario => {
      const index = this.concesionarios?.findIndex(g => g.id === concesionario.id);
      if (index !== -1) {
        this.concesionarios[index] = editarConcesionario;
      }
    });
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

  crearElConcesionario(): void {
    this.modalService.show<Concesionario>(NuevoConcesionarioComponent, {
      title: 'Crear Marca'
    }).result()
      .subscribe(nuevoConcesionario => {
        this.concesionarios?.push(nuevoConcesionario);
      });
  }
}*/


import { Component, OnInit } from '@angular/core';
import { ModalService } from '@developer-partners/ngx-modal-dialog';
import { Concesionario } from '../../interfaces/Concesionario.model';
import { ConcesionarioService } from '../../services/Concesionario.service';
import { ConcesionarioStateService } from '../../services/concesionario-state.service';

import { EliminarConcesionarioComponent } from '../eliminar-concesionario/eliminar-concesionario.component';
import { NuevoConcesionarioComponent } from '../nuevo-concesionario/nuevo-concesionario.component';
import { EditarConcesionarioComponent } from '../editar-concesionario/editar-concesionario.component';
import { MarcaService } from '../../../marca/services/marca.service';

@Component({
  selector: 'app-concesionario-principal',
  templateUrl: './concesionario-principal.component.html',
})
export class ConcesionarioPrincipalComponent implements OnInit {
  concesionarios: Concesionario[] = [];
  public currentPage = 1;
  public pageSize = 5;

  constructor(
    private concesionarioService: ConcesionarioService,
    private concesionarioStateService: ConcesionarioStateService,
    private marcaService: MarcaService,
    private readonly modalService: ModalService
  ) { }

  get paginatedConcesionario() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.concesionarios.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  ngOnInit(): void {
    this.getConcesionarios();
    this.concesionarioStateService.concesionarios$.subscribe(concesionarios => {
      this.concesionarios = concesionarios;
    });
  }

  getConcesionarios(): void {
    this.concesionarioService.getConcesionarios().subscribe(concesionarios => {
      this.concesionarioStateService.setConcesionarios(concesionarios);
    });
  }

  editarConcesionario(concesionario: Concesionario): void {
    this.modalService.show<Concesionario>(EditarConcesionarioComponent, {
      title: 'Editar concesionario',
      model: concesionario,
    }).result().subscribe(editarConcesionario => {
      const index = this.concesionarios.findIndex(g => g.id === concesionario.id);
      if (index !== -1) {
        this.concesionarios[index] = editarConcesionario;
        this.concesionarioStateService.setConcesionarios(this.concesionarios);
      }
    });
  }

  eliminarConcesionario(concesionario: Concesionario): void {
    this.modalService.show<Concesionario>(EliminarConcesionarioComponent, {
      title: 'Borrar Concesionario',
      model: concesionario,
    }).result().subscribe(() => {
      this.concesionarios = this.concesionarios.filter(c => c.id !== concesionario.id);
      this.concesionarioStateService.setConcesionarios(this.concesionarios);
    });
  }

  crearElConcesionario(): void {
    this.modalService.show<Concesionario>(NuevoConcesionarioComponent, {
      title: 'Crear Concesionario'
    }).result().subscribe(nuevoConcesionario => {
      this.concesionarios.push(nuevoConcesionario);
      this.concesionarioStateService.setConcesionarios(this.concesionarios);
    });
  }
}



