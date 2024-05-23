import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Coche } from '../interfaces/Coche.model';


@Injectable({
  providedIn: 'root'
})
export class CocheStateService {
  private cochesSubject = new BehaviorSubject<Coche[]>([]);
  coches$ = this.cochesSubject.asObservable();

  setCoches(coches: Coche[]) {
    this.cochesSubject.next(coches);
  }
}
