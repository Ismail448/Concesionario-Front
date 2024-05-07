import { Component } from '@angular/core';
import { Marca } from '../../interfaces/marca.model';
import { MarcaService } from '../../services/marca.service';
import { ModalReference } from '@developer-partners/ngx-modal-dialog';

@Component({
  selector: 'app-eliminar-marca',
  templateUrl: './eliminar-marca.component.html',
  styleUrls: []
})
export class EliminarMarcaComponent {

  public marcaBorrar:Marca[] = []

  public marca:Marca={} as Marca

  constructor(
    private marcaService: MarcaService,
    private readonly modalReference: ModalReference<Marca>) {
      if(this.modalReference.config.model){
        let copy = {...this.modalReference.config.model};
        this.marca=copy
      }
    }

    eliminarMarcaId(term:string){
      this.marcaService.eliminarMarca(term).subscribe(marcaId => {
        if (Array.isArray(marcaId)) {
          this.marcaBorrar = marcaId;
        } else {
          this.marcaBorrar = [marcaId];
        }
        location.reload()
      });
    }
}
