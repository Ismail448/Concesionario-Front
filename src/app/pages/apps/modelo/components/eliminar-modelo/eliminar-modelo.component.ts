import { Component } from '@angular/core';
import { Modelo } from '../../interfaces/Modelo.model';
import { ModeloService } from '../../service/modelo.service';
import { ModalReference } from '@developer-partners/ngx-modal-dialog';

@Component({
  selector: 'app-eliminar-modelo',
  templateUrl: './eliminar-modelo.component.html',
  styleUrls: []
})
export class EliminarModeloComponent {

  public modeloBorrar:Modelo[] = []

  public modelo:Modelo={} as Modelo

  constructor(
    private modeloService: ModeloService,
    private readonly modalReference: ModalReference<Modelo>) {
      if(this.modalReference.config.model){
        let copy = {...this.modalReference.config.model};
        this.modelo=copy
      }
    }

    eliminarModeloId(): void {
      this.modeloService.eliminarModelo(this.modelo.id.toString()).subscribe({
        next: (response) => {
          console.log('Modelo eliminado exitosamente', response);
          location.reload(); // Recargar la página después de la eliminación
        },
        error: (error) => {
          console.error('Error al eliminar el modelo: ', error);
        }
      });
    }
}
