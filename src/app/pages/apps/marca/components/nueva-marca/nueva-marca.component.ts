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
  anyoFundacion: string = ''

  constructor(
    private marcaService: MarcaService,
    private modeloService: ModeloService,
    private readonly modalReference:ModalReference<Marca>
  ) { }

  ngOnInit(): void {
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
  }

  crearMarca(nombreMarca: string, paisOrigen: string, sitioWeb: string, telefono: string, anyoFundacion: string, idModelo: string[]): void {
    this.marcaService.crearMarca(nombreMarca, paisOrigen, sitioWeb, telefono, anyoFundacion, idModelo)
    .subscribe(marcaCrear => {
        this.marcaCrear = marcaCrear;
    }, error => {
        console.error('Error al crear:', error);
    });
  }

  crear(nombreMarca: string, paisOrigen: string, sitioWeb: string, telefono: string, anyoFundacion: string, idModelo: string[]): void {
    this.crearMarca(nombreMarca,paisOrigen,sitioWeb,telefono,anyoFundacion,idModelo);
    //location.reload();
  }

  confirmarSeleccion(): void {
    const idSeleccionados = Object.keys(this.modeloSeleccionado).filter(id => this.modeloSeleccionado[id]);
    this.crear(this.nombreMarca,this.paisOrigen,this.sitioWeb,this.telefono,this.anyoFundacion, idSeleccionados);
    this.dropdownOpen = false;
  }
}
