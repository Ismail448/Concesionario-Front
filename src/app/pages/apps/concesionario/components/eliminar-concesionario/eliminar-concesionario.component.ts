import { Component } from '@angular/core';
import { Concesionario } from '../../interfaces/Concesionario.model';
import { ConcesionarioService } from '../../services/Concesionario.service';
import { ModalReference } from '@developer-partners/ngx-modal-dialog';

@Component({
  selector: 'app-eliminar-concesionario',
  templateUrl: './eliminar-concesionario.component.html',
  styleUrls: [

  ]
})
export class EliminarConcesionarioComponent {

  public concesionarioBorrar:Concesionario[] = []

  public concesionario:Concesionario={} as Concesionario

  constructor(
    private concesionarioService: ConcesionarioService,
    private readonly modalReference: ModalReference<Concesionario>) {
      if(this.modalReference.config.model){
        let copy = {...this.modalReference.config.model};
        this.concesionario=copy
      }
    }

    eliminarConcesionarioId(term:string){
      this.concesionarioService.eliminarConcesionario(term).subscribe(concesionarioId => {
        if (Array.isArray(concesionarioId)) {
          this.concesionarioBorrar = concesionarioId;
        } else {
          this.concesionarioBorrar = [concesionarioId];
        }
        location.reload()
      });
    }






}
  /*public borrarConcesionario:Concesionario[] = [];
  concesionarioService: any;
  concesionario: any;

  eliminarConcesionario(id: number): void {
    this.concesionarioService.eliminarConcesionario(id)
      .subscribe(() => {
        this.concesionario = this.concesionario.filter((c: { id: number; }) => c.id !== id);
      });
  }

  confirmarEliminacion(id: number): void {
    // Mostrar la alerta de confirmación
    if (confirm('¿Estás seguro de que quieres eliminar este elemento?')) {
      // Si el usuario pulsa "Aceptar", eliminar el elemento
      this.eliminarConcesionario(id);
    } else {
      // Si el usuario pulsa "Cancelar", no hacer nada
      // O podrías agregar un mensaje o realizar otra acción aquí
    }
  }*/

