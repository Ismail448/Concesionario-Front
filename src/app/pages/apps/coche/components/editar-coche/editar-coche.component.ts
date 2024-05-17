import { Component } from '@angular/core';
import { Coche } from '../../interfaces/Coche.model';
import { Modelo } from '../../../modelo/interfaces/Modelo.model';
import { CocheService } from '../../services/coche.service';
import { ModeloService } from '../../../modelo/service/modelo.service';
import { ModalReference } from '@developer-partners/ngx-modal-dialog';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-editar-coche',
  templateUrl: './editar-coche.component.html',
  styleUrls: []
})
export class EditarCocheComponent {

  public cocheEditar: Coche[] = [];
  public coche: Coche = {} as Coche;
  public modelos: Modelo[] = [];
  public modeloSeleccionadoId: string = '';
  public modeloSeleccionado: { [key: string]: boolean } = {};
  public dropdownOpen = false;
  public fechaFabricacion: NgbDate | undefined; // No necesitamos inicializarla aquí

  constructor(
    private cocheService: CocheService,
    private modeloService: ModeloService,
    private readonly modalReference: ModalReference<Coche>
  ){
    if(this.modalReference.config.model){
      let copy = {...this.modalReference.config.model};
      this.coche = copy;
      this.modeloSeleccionadoId = this.coche.modeloId;

      // Convertimos la fecha del coche a NgbDate para inicializar fechaFabricacion
      const fecha = new Date(this.coche.fechaFabricacion);
      this.fechaFabricacion = new NgbDate(fecha.getFullYear(), fecha.getMonth() + 1, fecha.getDate());
    } else {
      this.coche = {} as Coche;
    }
  }

  ngOnInit(): void {
    this.busquedaDeModelos();
  }

  busquedaDeModelos(): void {
    this.modeloService.buscarModelos().subscribe(
      modelos => {
        this.modelos = modelos;
      }
    );
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  onDateChange(date: NgbDate) {
    const selectedDate = new Date(date.year, date.month - 1, date.day);
    this.coche.fechaFabricacion = selectedDate;
  }

  editarCoche(id: number, color: string, matricula: string, precio: number, fechaFabricacion: Date, modeloId: string): void {
    if (id) {
      this.cocheService.editarCoche(
        id, color, matricula, precio, fechaFabricacion, modeloId
      ).subscribe(cocheEditar => {
        if (Array.isArray(cocheEditar)) {
          this.cocheEditar = cocheEditar;
        } else {
          this.cocheEditar = [cocheEditar];
        }
      }, error => {
        console.error('Error al editar:', error)
      });
    } else {
      console.error('El coche no tiene una estructura válida');
    }
  }

  editar(id: number, color: string, matricula: string, precio: number, fechaFabricacion: Date, modeloId: string): void {
    this.editarCoche(id, color, matricula, precio, fechaFabricacion, modeloId);
    location.reload()
  }

  confirmarSeleccion(): void {
    if (this.modeloSeleccionadoId) {
      this.dropdownOpen = false;
    } else {
      console.log('Debes seleccionar un modelo antes de confirmar.');
    }
  }
}
