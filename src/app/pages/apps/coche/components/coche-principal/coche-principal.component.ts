/*import { Component, Input } from '@angular/core';
import { CocheService } from '../../services/coche.service';
import { ModalService } from '@developer-partners/ngx-modal-dialog';
import { Coche } from '../../interfaces/Coche.model';
import { NuevoCocheComponent } from '../nuevo-coche/nuevo-coche.component';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { EditarCocheComponent } from '../editar-coche/editar-coche.component';
import { EliminarCocheComponent } from '../eliminar-coche/eliminar-coche.component';


@Component({
  selector: 'app-coche-principal',
  templateUrl: './coche-principal.component.html',
  styleUrls: []
})
export class CochePrincipalComponent {

  constructor(private cocheService: CocheService,
    private readonly modalService:ModalService
  ) { }



  @Input()
  coches:Coche[] = [];

  public currentPage = 1;
  public pageSize = 5;

  get paginatedCoche() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.coches.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  ngOnInit(): void {
    this.getCoches();
  }

  getCoches(): void {
    this.cocheService.getCoches()
      .subscribe(coches => this.coches = coches);
  }

  crearElCoche():void {
    this.modalService.show<Coche>(NuevoCocheComponent,{
      title:'Crear Coche'
    }).result()
    .subscribe(nuevoCoche =>{
      this.coches?.push(nuevoCoche)
    })
    }

    editarCoche(coche: Coche): void {
      this.modalService.show<Coche>(EditarCocheComponent, {
        title: 'Editar Coche',
        model: coche,
      }).result().subscribe(cocheEditado => {
        if (cocheEditado) {
          const index = this.coches?.findIndex(i => i.id === coche.id);
          if (index !== -1) {
            this.coches[index] = cocheEditado;
          }
        }
      });
    }

    eliminarCoche(coche: Coche): void {
      this.modalService.show<Coche>(EliminarCocheComponent, {
        title: 'Eliminar Coche',
        model: coche,
      }).result().subscribe(() => {

      });
    }
}*/

import { Component, Input } from '@angular/core';
import { CocheService } from '../../services/coche.service';
import { ModalService } from '@developer-partners/ngx-modal-dialog';
import { Coche } from '../../interfaces/Coche.model';
import { NuevoCocheComponent } from '../nuevo-coche/nuevo-coche.component';
import { EditarCocheComponent } from '../editar-coche/editar-coche.component';
import { EliminarCocheComponent } from '../eliminar-coche/eliminar-coche.component';

@Component({
  selector: 'app-coche-principal',
  templateUrl: './coche-principal.component.html',
  styleUrls: []
})
export class CochePrincipalComponent {

  constructor(private cocheService: CocheService,
              private readonly modalService: ModalService) { }

  @Input() coches: Coche[] = [];

  public currentPage = 1;
  public pageSize = 5;

  get paginatedCoche() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.coches.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  ngOnInit(): void {
    this.getCoches();
  }

  getCoches(): void {
    this.cocheService.getCoches()
      .subscribe(coches => this.coches = coches);
  }

  onSearchResults(coches: Coche[]): void {
    this.coches = coches;
    this.currentPage = 1; // Reset to first page on new search results
  }

  crearElCoche(): void {
    this.modalService.show<Coche>(NuevoCocheComponent, {
      title: 'Crear Coche'
    }).result()
      .subscribe(nuevoCoche => {
        this.coches.push(nuevoCoche);
      });
  }

  editarCoche(coche: Coche): void {
    this.modalService.show<Coche>(EditarCocheComponent, {
      title: 'Editar Coche',
      model: coche,
    }).result().subscribe(cocheEditado => {
      if (cocheEditado) {
        const index = this.coches.findIndex(i => i.id === coche.id);
        if (index !== -1) {
          this.coches[index] = cocheEditado;
        }
      }
    });
  }

  eliminarCoche(coche: Coche): void {
    this.modalService.show<Coche>(EliminarCocheComponent, {
      title: 'Eliminar Coche',
      model: coche,
    }).result().subscribe(() => {
      const index = this.coches.findIndex(i => i.id === coche.id);
      if (index !== -1) {
        this.coches.splice(index, 1);
      }
    });
  }
}

