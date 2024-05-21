import { Component } from '@angular/core';
import { Modelo } from '../../interfaces/Modelo.model';
import { ModeloService } from '../../service/modelo.service';
import { MarcaService } from '../../../marca/services/marca.service';
import { ModalReference } from '@developer-partners/ngx-modal-dialog';
import { Marca } from '../../../marca/interfaces/marca.model';

@Component({
  selector: 'app-editar-modelo',
  templateUrl: './editar-modelo.component.html',
  styleUrls: []
})
export class EditarModeloComponent {

  public modeloEditar: Modelo[] = [];
  public modelo: Modelo = {} as Modelo;
  public marcas: Marca[] = [];
  public marcaSeleccionadaId: string = '';
  public marcaSeleccionada: { [key: string]: boolean } = {};
  public dropdownOpen = false;

  constructor(
    private modeloService: ModeloService,
    private marcaService: MarcaService,
    private readonly modalReference: ModalReference<Modelo>
  ){
    if(this.modalReference.config.model){
      let copy = {...this.modalReference.config.model};
      this.modelo = copy;
    } else {
      this.modelo = {} as Modelo; // Inicializar el modelo vacío si no se proporciona uno
    }
  }

  ngOnInit(): void {
    this.busquedaDeMarcas();
    this.cargarModelo();
  }

  cargarModelo(): void {
    // Verificar si el modelo tiene marcas asociadas
    if (this.modelo && this.modelo.marcas) {
      // Recorrer las marcas asociadas al modelo y marcar las casillas de verificación correspondientes
      this.modelo.marcas.forEach((marca: { id: string | number; }) => {
        this.marcaSeleccionada[marca.id] = true;
      });
    }
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

  editarModelo(id: string, nombreModelo: string, tipoCoche: string, anyoLanzamiento: number, marcaId: string): void {
    if (id) {
      this.modeloService.editarModelo(
        id, nombreModelo, tipoCoche, anyoLanzamiento, marcaId
      ).subscribe(modeloEditar => {
        if (Array.isArray(modeloEditar)) {
          this.modeloEditar = modeloEditar;
        } else {
          this.modeloEditar = [modeloEditar];
        }
      }, error => {
        console.error('Error al editar:', error)
      });
    } else {
      console.error('El modelo no tiene una estructura válida');
    }
  }

  editar(id: string, nombreModelo: string, tipoCoche: string, anyoLanzamiento: number, marcaId: string): void {
    this.editarModelo(id, nombreModelo, tipoCoche, anyoLanzamiento, marcaId);
    location.reload()
  }

  confirmarSeleccion(): void {
    if (this.marcaSeleccionadaId) {
      this.dropdownOpen = false; // Cerrar el dropdown después de confirmar la selección
    } else {
      console.log('Debes seleccionar una marca antes de confirmar.');
    }
  }
}
