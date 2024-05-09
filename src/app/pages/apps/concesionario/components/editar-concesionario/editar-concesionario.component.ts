import { Component } from '@angular/core';
import { Concesionario } from '../../interfaces/Concesionario.model';
import { ModalReference } from '@developer-partners/ngx-modal-dialog';
import { ConcesionarioService } from '../../services/Concesionario.service';
import { Marca } from '../../../marca/interfaces/marca.model';
import { MarcaService } from '../../../marca/services/marca.service';

@Component({
  selector: 'app-editar-concesionario',
  templateUrl: './editar-concesionario.component.html',
  styleUrls: [

  ]
})
export class EditarConcesionarioComponent {

  public concesionarioEditar:Concesionario[]=[]
  public concesionario:Concesionario={} as Concesionario
  marcas: Marca[]=[];
  selectedMarca: string[]=[];
  public marcaSeleccionada: { [key: string]: boolean } = {};
  public dropdownOpen = false;


  constructor(
    private concesionarioService: ConcesionarioService,
    private marcaService: MarcaService,
    private readonly modalReference: ModalReference<Concesionario>) {
      if(this.modalReference.config.model){
        let copy = {...this.modalReference.config.model};
        this.concesionario=copy
      }
    }

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

    /*editarConcesionario(term:string,nombreConcesionario:string,direccion:string,telefono:string,email:string,sitioWeb:string): void {
      this.concesionarioService.editarConcesionario(
        term,nombreConcesionario,direccion,telefono,email,sitioWeb)
        .subscribe(concesionarioEditar => {
          if (Array.isArray(concesionarioEditar)) {
            this.concesionarioEditar = concesionarioEditar
          } else {
            this.concesionarioEditar = [concesionarioEditar]
          }
        }, error => {
          console.error('Error al editar:', error)
        })
    }

    editar(term:string,nombreConcesionario:string,direccion:string,telefono:string,email:string,sitioWeb:string): void {
      this.editarConcesionario(term,nombreConcesionario,direccion,telefono,email,sitioWeb);
      location.reload()
    }*/
    editarConcesionario(id: string, nombreConcesionario: string, direccion: string, telefono: string, email: string, sitioWeb: string, idMarcas: string[]): void {
      this.concesionarioService.editarConcesionario(
        id, nombreConcesionario, direccion, telefono, email, sitioWeb, idMarcas)
        .subscribe(concesionarioEditar => {
          if (Array.isArray(concesionarioEditar)) {
            this.concesionarioEditar = concesionarioEditar;
          } else {
            this.concesionarioEditar = [concesionarioEditar];
          }
        }, error => {
          console.error('Error al editar:', error);
        });
    }

    editar(id: string, nombreConcesionario: string, direccion: string, telefono: string, email: string, sitioWeb: string, idMarcas: string[]): void {
      this.editarConcesionario(id, nombreConcesionario, direccion, telefono, email, sitioWeb, idMarcas);
      location.reload();
    }

    confirmarSeleccion(): void {
      const idSeleccionados = Object.keys(this.marcaSeleccionada).filter(id => this.marcaSeleccionada[id]);
      this.selectedMarca = idSeleccionados; // Actualizar la lista de marcas seleccionadas
      this.dropdownOpen = false; // Cerrar el dropdown después de confirmar la selección
    }

}
