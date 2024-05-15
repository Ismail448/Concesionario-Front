import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class CocheService {

  private baseUrl = 'http://localhost:8081/coches';


  constructor(private http: HttpClient) { }



}
