import { Component } from '@angular/core';
import { MarcaService } from '../../services/marca.service';
import { ConcesionarioService } from '../../../concesionario/services/Concesionario.service';
import { Marca } from '../../interfaces/marca.model';
import { ModalReference } from '@developer-partners/ngx-modal-dialog';

@Component({
  selector: 'app-editar-marca',
  templateUrl: './editar-marca.component.html',
  styleUrls: []
})
export class EditarMarcaComponent {

  public marca:Marca={} as Marca
  public marcaEditar:Marca[]=[]

  constructor(
    private marcaService: MarcaService,
    private readonly modalReference: ModalReference<Marca>) {
      if(this.modalReference.config.model){
        let copy = {...this.modalReference.config.model};
        this.marca=copy
      }
    }

    editarMarca(id: number, nombreMarca: string, paisOrigen: string, sitioWeb: string, telefono: string, anyoFundacion: number): void {
      this.marcaService.editarMarca(id, nombreMarca, paisOrigen, sitioWeb, telefono, anyoFundacion)
        .subscribe(
          marcaEditar => {
            // Actualización exitosa, si deseas hacer algo con la respuesta del servidor, puedes hacerlo aquí
            console.log('Marca editada:', marcaEditar);
            location.reload();
          },
          error => {
            console.error('Error al editar:', error);
          }
        );
    }

    editar(id: number, nombreMarca: string, paisOrigen: string, sitioWeb: string, telefono: string, anyoFundacion: number): void {
      this.editarMarca(id, nombreMarca, paisOrigen, sitioWeb, telefono, anyoFundacion);

    }
}
