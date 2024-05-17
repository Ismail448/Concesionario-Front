import { Component } from '@angular/core';
import { Coche } from '../../interfaces/Coche.model';
import { CocheService } from '../../services/coche.service';
import { ModalReference } from '@developer-partners/ngx-modal-dialog';

@Component({
  selector: 'app-eliminar-coche',
  templateUrl: './eliminar-coche.component.html',
  styleUrls: []
})
export class EliminarCocheComponent {

  public cocheBorrar:Coche[] = []

  public coche:Coche={} as Coche

  constructor(
    private cocheService: CocheService,
    private readonly modalReference: ModalReference<Coche>) {
      if(this.modalReference.config.model){
        let copy = {...this.modalReference.config.model};
        this.coche=copy
      }
    }

    eliminarCocheId(): void {
      this.cocheService.eliminarCoche(this.coche.id.toString()).subscribe({
        next: (response) => {
          console.log('Coche eliminado exitosamente', response);
          location.reload(); // Recargar la página después de la eliminación
        },
        error: (error) => {
          console.error('Error al eliminar el Coche: ', error);
        }
      });
    }
}
