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
    anyoFundacion: number): Observable<Marca[]> {


    const body = {
      "nombre": nombreMarca,
      "paisOrigen": paisOrigen,
      "sitioWeb": sitioWeb,
      "telefono": telefono,
      "anyoFundacion": anyoFundacion,

    }
    return this.http.post<Marca[]>(`http://localhost:8081/marcas/MarcaJson`, body)
  }

  editarMarca(id: number,nombreMarca: string, paisOrigen: string, sitioWeb: string, telefono: string,
    anyoFundacion: number): Observable<Marca[]> {

      const url = `${this.baseUrl}/MarcaJson/${id}`;
    const body = {
      "id": id,
      "nombre": nombreMarca,
      "paisOrigen": paisOrigen,
      "sitioWeb": sitioWeb,
      "telefono": telefono,
      "anyoFundacion": anyoFundacion,

    }
    return this.http.put<Marca[]>(url, body)
  }

  eliminarMarca(id: string): Observable<Marca[]> {
    const url = `${ this.baseUrl }/${ id }`;
    return this.http.delete<Marca[]>( url )
  }

  searchMarca(request: any): Observable<any> {
    const url = `${this.baseUrl}/marcas/search`;
    return this.http.post<any>(url, request);
  }
}
