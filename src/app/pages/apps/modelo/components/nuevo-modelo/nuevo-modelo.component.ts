import { Component } from '@angular/core';
import { Modelo } from '../../interfaces/Modelo.model';
import { ModeloService } from '../../service/modelo.service';
import { ModalReference } from '@developer-partners/ngx-modal-dialog';

@Component({
  selector: 'app-nuevo-modelo',
  templateUrl: './nuevo-modelo.component.html',
  styleUrls: []
})
export class NuevoModeloComponent {

  public modeloCrear: Modelo[]=[]

  constructor(
    private modeloServirce:ModeloService,
    private readonly modalreference:ModalReference<Modelo>
  ) { }

  nuevoModelo(nombreModelo: string, tipoCoche: string, anyoLanzamiento: string, marcaId: number[]): void {
    this.modeloServirce.crearModelo(nombreModelo,tipoCoche,anyoLanzamiento,marcaId)
    .subscribe(modeloCrear => {
      if (Array.isArray(modeloCrear)) {
        this.modeloCrear = modeloCrear;
      } else {
        this.modeloCrear = [modeloCrear]
      }
    }, error => {
      console.error('Error al crear el modelo: ', error)
    })
  }

  crear(nombreModelo: string, tipoCoche: string, anyoLanzamiento: string, marcaId: number[]): void {
    this.nuevoModelo(nombreModelo,tipoCoche,anyoLanzamiento,marcaId);
    console.log(nombreModelo,tipoCoche,anyoLanzamiento,marcaId),
    location.reload()
  }
}
