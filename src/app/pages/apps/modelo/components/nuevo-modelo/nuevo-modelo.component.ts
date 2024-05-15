import { Component } from '@angular/core';
import { Modelo } from '../../interfaces/Modelo.model';
import { ModeloService } from '../../service/modelo.service';
import { ModalReference } from '@developer-partners/ngx-modal-dialog';
import { MarcaService } from '../../../marca/services/marca.service';
import { Marca } from '../../../marca/interfaces/marca.model';

@Component({
  selector: 'app-nuevo-modelo',
  templateUrl: './nuevo-modelo.component.html',
  styleUrls: []
})
export class NuevoModeloComponent {

  public modeloCrear: Modelo[] = [];
  public marcas: Marca[] = [];
  public nombreModelo: string = '';
  public tipoCoche: string = '';
  public anyoLanzamiento: string = '';
  public marcaSeleccionadaId: string = '';
  public dropdownOpen = false;

  constructor(
    private modeloService: ModeloService,
    private marcaService: MarcaService
  ) { }

  ngOnInit(): void {
    this.busquedaDeMarcas();
  }

  busquedaDeMarcas(): void {
    this.marcaService.buscarMarcas().subscribe(
      marcas => {
        this.marcas = marcas;
      }
    );
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  crearModelo(): void {
    if (this.nombreModelo && this.tipoCoche && this.anyoLanzamiento && this.marcaSeleccionadaId) {
      this.modeloService.crearModelo(this.nombreModelo, this.tipoCoche, this.anyoLanzamiento, this.marcaSeleccionadaId)
        .subscribe(modeloCrear => {
          if (Array.isArray(modeloCrear)) {
            this.modeloCrear = modeloCrear;
          } else {
            this.modeloCrear = [modeloCrear];
          }
          window.location.reload();
        }, error => {
          console.error('Error al crear el modelo: ', error);
        });
    } else {
      console.log('Debes completar todos los campos y seleccionar una marca antes de crear el modelo.');
    }
  }

  confirmarSeleccion(): void {
    if (this.marcaSeleccionadaId) {
      this.dropdownOpen = false; // Cerrar el dropdown después de confirmar la selección
    } else {
      console.log('Debes seleccionar una marca antes de confirmar.');
    }
  }
}

