// modelo-state.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Modelo } from '../interfaces/Modelo.model';

@Injectable({
  providedIn: 'root'
})
export class ModeloStateService {
  private modelosSubject = new BehaviorSubject<Modelo[]>([]);
  modelos$ = this.modelosSubject.asObservable();

  setModelos(modelos: Modelo[]): void {
    const sortedModelos = modelos.sort((a, b) => +a.id - +b.id);
    this.modelosSubject.next(sortedModelos);
  }

  getModelos(): Observable<Modelo[]> {
    return this.modelos$;
  }
}
