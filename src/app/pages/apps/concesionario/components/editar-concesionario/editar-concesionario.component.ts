import { Component } from '@angular/core';
import { Concesionario } from '../../interfaces/Concesionario.model';
import { ModalReference } from '@developer-partners/ngx-modal-dialog';
import { ConcesionarioService } from '../../services/Concesionario.service';

@Component({
  selector: 'app-editar-concesionario',
  templateUrl: './editar-concesionario.component.html',
  styleUrls: [

  ]
})
export class EditarConcesionarioComponent {

  public concesionarioEditar:Concesionario[]=[]
  public concesionario:Concesionario={} as Concesionario

  constructor(
    private concesionarioService: ConcesionarioService,
    private readonly modalReference: ModalReference<Concesionario>) {
      if(this.modalReference.config.model){
        let copy = {...this.modalReference.config.model};
        this.concesionario=copy
      }
    }

    actualizarConcesionario(term:string,nombreConcesionario:string,direccion:string,telefono:string,email:string,sitioWeb:string): void {
      this.concesionarioService.actualizarConcesionario(
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
      this.actualizarConcesionario(term,nombreConcesionario,direccion,telefono,email,sitioWeb);
      location.reload()
    }
}
