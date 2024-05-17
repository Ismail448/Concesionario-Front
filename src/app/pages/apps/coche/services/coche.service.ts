import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Coche } from "../interfaces/Coche.model";
import { NgbDate } from "@ng-bootstrap/ng-bootstrap";

@Injectable({providedIn: 'root'})
export class CocheService {

  private baseUrl = 'http://localhost:8081/coches';


  constructor(private http: HttpClient) { }

  getCoches(): Observable<Coche[]> {
    return this.http.get<Coche[]>(`${this.baseUrl}/getCoche`)
  }

  crearCoche(color:string, matricula:string, precio:number, fechaFabricacion: Date, modeloId: string): Observable<Coche[]>{

    const body = {
    "color":color,
    "matricula": matricula,
    "precio": precio,
    "fechaFabricacion": fechaFabricacion,
    "modeloId": modeloId
    }
    return this.http.post<Coche[]>(`${this.baseUrl}/registrarCocheJson`, body)
  }

  editarCoche(id: number, color:string, matricula:string, precio:number, fechaFabricacion: Date, modeloId: string): Observable<Coche[]>{

    const url = `${this.baseUrl}/CocheJson/${id}`;
    const body = {
    "id": id,
    "color":color,
    "matricula": matricula,
    "precio": precio,
    "fechaFabricacion": fechaFabricacion,
    "modeloId": modeloId
    }
    return this.http.put<Coche[]>(url, body)
  }

  eliminarCoche(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
