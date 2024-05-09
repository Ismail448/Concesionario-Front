import { Component, OnInit } from '@angular/core';
import { Concesionario } from '../../interfaces/Concesionario.model';
import { ModalReference } from '@developer-partners/ngx-modal-dialog';
import { ConcesionarioService } from '../../services/Concesionario.service';
import { Marca } from '../../../marca/interfaces/marca.model';
import { MarcaService } from '../../../marca/services/marca.service';


@Component({
  selector: 'app-nuevo-concesionario',
  templateUrl: './nuevo-concesionario.component.html',
  styleUrls: [

  ]
})
export class NuevoConcesionarioComponent implements OnInit{

  public concesionarioCrear:Concesionario[]=[]
  marcas: Marca[]=[];
  selectedMarcas: string[]=[];
  public marcaSeleccionada: { [id: string]: boolean } = {};
  public dropdownOpen = false;
  nombreConcesionario: string = '';
  direccion: string= '';
  telefono: string= '';
  email: string= '';
  sitioWeb: string= '';

  constructor(
    private concesionarioService: ConcesionarioService,
    private marcaService: MarcaService,
    private readonly modalReference:ModalReference<Concesionario>
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
    console.log(this.marcas)
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  crearConcesionario(nombreConcesionario: string, direccion: string, telefono: string, email: string, sitioWeb: string, marcas: string[]): void {
    this.concesionarioService.crearConcesionario(nombreConcesionario, direccion, telefono, email, sitioWeb, marcas)
    .subscribe(concesionarioCrear => {
        this.concesionarioCrear = concesionarioCrear;

    });
  }

  crear(nombreConcesionario: string, direccion: string, telefono: string, email: string, sitioWeb: string): void {
    const idSeleccionados = Object.keys(this.marcaSeleccionada).filter(id => this.marcaSeleccionada[id]);
    if (idSeleccionados.length > 0) {
      this.crearConcesionario(nombreConcesionario, direccion, telefono, email, sitioWeb, idSeleccionados);
      location.reload();
    } else {
      console.log('Debes seleccionar al menos una marca antes de crear el concesionario.');
    }
  }


  confirmarSeleccion(): void {
    const idSeleccionados = Object.keys(this.marcaSeleccionada).filter(id => this.marcaSeleccionada[id]);
    this.selectedMarcas = idSeleccionados; // Actualizar la lista de marcas seleccionadas
    this.dropdownOpen = false; // Cerrar el dropdown después de confirmar la selección
  }


}

