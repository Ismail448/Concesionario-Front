import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Modelo } from "../interfaces/Modelo.model";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class ModeloService {

  private baseUrl = 'http://localhost:8081/modelos';


  constructor(private http: HttpClient) { }

  getModelos(): Observable<Modelo[]> {
    return this.http.get<Modelo[]>(`${this.baseUrl}/all`)
  }

  buscarModelos(): Observable<Modelo[]> {
    return this.http.get<Modelo[]>(`${this.baseUrl}/buscarModelos`)
  }
}
