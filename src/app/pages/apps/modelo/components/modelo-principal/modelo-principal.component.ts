import { Component, Input } from '@angular/core';
import { ModeloService } from '../../service/modelo.service';
import { ModalService } from '@developer-partners/ngx-modal-dialog';
import { Modelo } from '../../interfaces/Modelo.model';
import { NuevoModeloComponent } from '../nuevo-modelo/nuevo-modelo.component';

@Component({
  selector: 'app-modelo-principal',
  templateUrl: './modelo-principal.component.html',
  styleUrls: []
})
export class ModeloPrincipalComponent {

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
}
