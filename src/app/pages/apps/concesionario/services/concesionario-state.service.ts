// concesionario-state.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Concesionario } from '../interfaces/Concesionario.model';

@Injectable({
  providedIn: 'root'
})
export class ConcesionarioStateService {
  private concesionariosSubject = new BehaviorSubject<Concesionario[]>([]);
  concesionarios$ = this.concesionariosSubject.asObservable();

  setConcesionarios(concesionarios: Concesionario[]) {
    const sortedConcesionarios = concesionarios.sort((a, b) => +a.id - +b.id);
    this.concesionariosSubject.next(sortedConcesionarios);
  }
}
