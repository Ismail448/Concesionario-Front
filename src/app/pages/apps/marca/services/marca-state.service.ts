// marca-state.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Marca } from '../interfaces/marca.model';

@Injectable({
  providedIn: 'root'
})
export class MarcaStateService {
  private marcasSubject = new BehaviorSubject<Marca[]>([]);
  marcas$ = this.marcasSubject.asObservable();

  setMarcas(marcas: Marca[]): void {
    const sortedMarcas = marcas.sort((a, b) => +a.id - +b.id);
    this.marcasSubject.next(sortedMarcas);
  }

  getMarcas(): Observable<Marca[]> {
    return this.marcas$;
  }
}
