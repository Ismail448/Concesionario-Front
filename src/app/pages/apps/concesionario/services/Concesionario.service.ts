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

  registrarConcesionario(concesionario: any): Observable<Concesionario[]> {
    const url = `${this.baseUrl}/ConcesionarioJson`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(url, concesionario, { headers })
  }

  actualizarConcesionario(term:string,nombreConcesionario:string,direccion:string,telefono:string,email:string,sitioWeb:string): Observable<Concesionario[]> {
    const url = `${this.baseUrl}/ConcesionarioJson/${term}`;
    const body = {
      "id": term,
      "nombre": nombreConcesionario,
      "direccion": direccion,
      "telefono": telefono,
      "email": email,
      "sitioWeb": sitioWeb
    }
    return this.http.put<Concesionario[]>(url, body)
  }

  eliminarConcesionario(term: string): Observable<Concesionario[]> {
    const url = `${ this.baseUrl }/${ term }`;
    return this.http.delete<Concesionario[]>( url )
  }

  getConcesionarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

  crearConcesionario(
    nombreConcesionario: string, direccion: string, telefonoConcesionario: string, email: string, sitioWebConcesionario: string,
    marcas:string[]): Observable<Concesionario[]> {

    const body = {
      "nombre": nombreConcesionario,
      "direccion": direccion,
      "telefono": telefonoConcesionario,
      "email": email,
      "sitioWeb": sitioWebConcesionario,
      "marcas": marcas,
    };

    return this.http.post<Concesionario[]>(`http://localhost:8081/concesionario/ConcesionarioJson`, body);
  }


  /*buscarConcesionariosPaginados(page: number = 0, size: number = 10): Observable<Page<Concesionario>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<Page<Concesionario>>(`${this.baseUrl}/paginado`, { params });
  }*/

}

