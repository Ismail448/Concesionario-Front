import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Marca } from "../interfaces/marca.model";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class MarcaService {

  private baseUrl = 'http://localhost:8081/marcas';


  constructor(private http: HttpClient) { }

  getMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(`${this.baseUrl}/all`)
  }

  buscarMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(`${this.baseUrl}/buscarMarcas`)
  }

  crearMarca(nombreMarca: string, paisOrigen: string, sitioWeb: string, telefono: string,
    anyoFundacion: string, idModelo: string[] ): Observable<Marca[]> {

    const body = {
      "nombre": nombreMarca,
      "paisOrigen": paisOrigen,
      "sitioWeb": sitioWeb,
      "telefono": telefono,
      "anyoFundacion": anyoFundacion,
      "modelo": idModelo
    }
    return this.http.post<Marca[]>(`http://localhost:8081/marcas/MarcaJson`, body)
  }
}
