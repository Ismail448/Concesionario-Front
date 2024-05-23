/*import { Component } from '@angular/core';
import { Coche } from '../../interfaces/Coche.model';
import { Modelo } from '../../../modelo/interfaces/Modelo.model';
import { CocheService } from '../../services/coche.service';
import { ModeloService } from '../../../modelo/service/modelo.service';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-nuevo-coche',
  templateUrl: './nuevo-coche.component.html',
  styleUrls: []
})
export class NuevoCocheComponent {

  public cocheCrear: Coche[] = [];
  public modelos: Modelo[] = [];
  public color: string = '';
  public matricula: string = '';
  public precio: number | undefined;
  public fechaFabricacion: Date = new Date();
  public modeloSeleccionadoId: string = '';
  public dropdownOpen = false;

  constructor(
    private cocheService: CocheService,
    private modeloService: ModeloService,
    private calendar: NgbCalendar
  ) {
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
    this.fechaFabricacion = new Date(Date.UTC(date.year, date.month - 1, date.day));
  }

  crearCoche(): void {
    if (this.color && this.matricula && this.precio && this.fechaFabricacion && this.modeloSeleccionadoId) {
      this.cocheService.crearCoche(this.color, this.matricula, this.precio, this.fechaFabricacion, this.modeloSeleccionadoId)
        .subscribe(cocheCrear => {
          if (Array.isArray(cocheCrear)) {
            this.cocheCrear = cocheCrear;
          } else {
            this.cocheCrear = [cocheCrear];
          }
          window.location.reload();
        }, error => {
          console.error('Error al crear el coche: ', error);
        });
    } else {
      console.log('Debes completar todos los campos y seleccionar un modelo antes de crear el coche.');

    }
  }

  confirmarSeleccion(): void {
    if (this.modeloSeleccionadoId) {
      this.dropdownOpen = false; // Cerrar el dropdown después de confirmar la selección
    } else {
      console.log('Debes seleccionar un modelo antes de confirmar.');
    }
  }
}*/

import { Component } from '@angular/core';
import { CocheService } from '../../services/coche.service';
import { ModeloService } from '../../../modelo/service/modelo.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nuevo-coche',
  templateUrl: './nuevo-coche.component.html',
  styleUrls: []
})
export class NuevoCocheComponent {

  public color: string = '';
  public matricula: string = '';
  public precio: number | undefined;
  public fechaFabricacion: Date = new Date();
  public modeloSeleccionadoId: string = '';
  public modelos: any[] = [];
  public dropdownOpen = false;

  constructor(
    private cocheService: CocheService,
    private modeloService: ModeloService
  ) {}

  ngOnInit(): void {
    this.cargarModelos();
  }

  cargarModelos(): void {
    this.modeloService.buscarModelos().subscribe(
      modelos => {
        this.modelos = modelos;
      }
    );
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  onDateChange(date: NgbDate): void {
    this.fechaFabricacion = new Date(Date.UTC(date.year, date.month - 1, date.day));
  }

  crearCoche(): void {
    if (this.color && this.matricula && this.precio && this.fechaFabricacion && this.modeloSeleccionadoId) {
      this.cocheService.crearCoche(this.color, this.matricula, this.precio, this.fechaFabricacion, this.modeloSeleccionadoId)
        .subscribe(
          response => {
            console.log('Respuesta del servidor:', response);
            window.location.reload();
          },
          error => {
            console.error('Error al crear el coche: ', error);
            alert('Error al crear el coche. Por favor, intenta nuevamente.');
          }
        );
    } else {
      console.log('Debes completar todos los campos y seleccionar un modelo antes de crear el coche.');
    }
  }

  confirmarSeleccion(): void {
    if (this.modeloSeleccionadoId) {
      this.dropdownOpen = false;
    } else {
      console.log('Debes seleccionar un modelo antes de confirmar.');
    }
  }
}

