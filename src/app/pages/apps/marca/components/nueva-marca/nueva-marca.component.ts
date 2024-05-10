import { Component } from '@angular/core';
import { MarcaService } from '../../services/marca.service';
import { ModalReference } from '@developer-partners/ngx-modal-dialog';
import { Marca } from '../../interfaces/marca.model';
import { ModeloService } from '../../../modelo/service/modelo.service';
import { Modelo } from '../../../modelo/interfaces/Modelo.model';

@Component({
  selector: 'app-nueva-marca',
  templateUrl: './nueva-marca.component.html',
  styleUrls: []
})
export class NuevaMarcaComponent {
  public marcaCrear:Marca[]=[]
  modelos:Modelo[]=[]
  selectedModelos: string[]=[]
  public modeloSeleccionado: { [id: string]: boolean } = {};
  public dropdownOpen = false;
  nombreMarca: string = ''
  paisOrigen: string = ''
  sitioWeb: string = ''
  telefono: string = ''
  anyoFundacion: number = 0

  constructor(
    private marcaService: MarcaService,
    private modeloService: ModeloService,
    private readonly modalReference:ModalReference<Marca>
  ) { }

  /*ngOnInit(): void {
    this.busquedaDeModelos();
  }
  busquedaDeModelos(): void {
    this.modeloService.buscarModelos().subscribe(
      modelos => {
        this.modelos = modelos;
      }
    );
    console.log(this.modelos)
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }*/

  crearMarca(nombreMarca: string, paisOrigen: string, sitioWeb: string, telefono: string, anyoFundacion: number): void {
    this.marcaService.crearMarca(nombreMarca, paisOrigen, sitioWeb, telefono, anyoFundacion)
      .subscribe(
        marcaCrear => {
          // La marca se creó con éxito, puedes recargar la página aquí si lo deseas
          location.reload();
        },
        error => {
          // Hubo un error al crear la marca, muestra el mensaje de error en la consola
          console.error('Error al crear:', error.error);
        }
      );
  }

  crear(nombreMarca: string, paisOrigen: string, sitioWeb: string, telefono: string, anyoFundacion: number): void {
    // Verificar si los campos obligatorios están completos antes de crear la marca
    if (nombreMarca.trim() !== '' && paisOrigen.trim() !== '') {
      this.crearMarca(nombreMarca, paisOrigen, sitioWeb, telefono, anyoFundacion);
      location.reload(); // Recargar la página después de crear la marca
    } else {
      console.log('Por favor, completa el nombre de la marca y el país de origen antes de crearla.');
    }
  }


  /*confirmarSeleccion(): void {
    const idSeleccionados = Object.keys(this.modeloSeleccionado).filter(id => this.modeloSeleccionado[id]);
    this.selectedModelos = idSeleccionados; // Actualizar la lista de marcas seleccionadas
    this.dropdownOpen = false; // Cerrar el dropdown después de confirmar la selección
  }*/
}
