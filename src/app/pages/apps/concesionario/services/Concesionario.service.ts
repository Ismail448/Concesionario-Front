import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Concesionario } from '../interfaces/Concesionario.model';


@Injectable({
  providedIn: 'root'
})
export class ConcesionarioService {

  private baseUrl = 'http://localhost:8081/concesionario';

  constructor(private http: HttpClient) { }

  eliminarConcesionario(term: string): Observable<Concesionario[]> {
    const url = `${ this.baseUrl }/${ term }`;
    return this.http.delete<Concesionario[]>( url )
  }

  getConcesionarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

  crearConcesionario(
    nombreConcesionario: string, direccion: string, telefonoConcesionario: string, email: string, sitioWebConcesionario: string,
    idMarcas:string[]): Observable<Concesionario[]> {

    const marcas = idMarcas.map(id => ({ id }))

    const body = {
      "nombre": nombreConcesionario,
      "direccion": direccion,
      "telefono": telefonoConcesionario,
      "email": email,
      "sitioWeb": sitioWebConcesionario,
      "marcas": marcas
    };

    return this.http.post<Concesionario[]>(`http://localhost:8081/concesionario/registrarConcesionario`, body);
  }


  editarConcesionario(id: string, nombreConcesionario: string, direccion: string, telefono: string, email: string, sitioWeb: string, idMarcas: string[]): Observable<Concesionario[]> {
    const marcas = idMarcas.map(id => ({ id }))
    const url = `${this.baseUrl}/ConcesionarioJson/${id}`;
    const body = {
      "id": id,
      "nombre": nombreConcesionario,
      "direccion": direccion,
      "telefono": telefono,
      "email": email,
      "sitioWeb": sitioWeb,
      "marcas": marcas
    };
    return this.http.put<Concesionario[]>(url, body);
  }

  /*searchConcesionarios(searchRequest: any): Observable<any> {
    const url = `${this.baseUrl}/concesionarios/search`;
    return this.http.post<any>(url, searchRequest);
  }

  gettConcesionarios(): Observable<Concesionario[]> {
    return this.http.get<Concesionario[]>(`${this.baseUrl}/all`);
  }*/

  searchConcesionarios(request: any): Observable<any> {
    const url = `${this.baseUrl}/concesionarios/search`;
    return this.http.post<any>(url, request);
  }


}

