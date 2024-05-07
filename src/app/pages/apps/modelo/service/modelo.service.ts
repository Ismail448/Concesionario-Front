import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Modelo } from "../interfaces/Modelo.model";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class ModeloService {

  private baseUrl = 'http://localhost:8081/modelos';


  constructor(private http: HttpClient) { }

  getModelos(): Observable<Modelo[]> {
    return this.http.get<Modelo[]>(`${this.baseUrl}/modelos`)
  }

  buscarModelos(): Observable<Modelo[]> {
    return this.http.get<Modelo[]>(`${this.baseUrl}/buscarModelos`)
  }

  eliminarModelo(id: string): Observable<Modelo[]> {
    const url = `${ this.baseUrl }/${ id }`;
    return this.http.delete<Modelo[]>( url )
  }

  crearModelo( nombreModelo: string, tipoCoche: string, anyoLanzamiento: string, marcaId: number[]): Observable<Modelo[]> {

    const body = {
      "nombre": nombreModelo,
      "tipoCoche": tipoCoche,
      "anyoLanzamiento": anyoLanzamiento,
      "marcaId": marcaId
    };
    return this.http.put<Modelo[]>(this.baseUrl,body)
  }
}
