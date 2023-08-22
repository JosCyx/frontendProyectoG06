import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationAPIService {

  readonly APIUrl = "https://localhost:7039/api";

  constructor(private http: HttpClient) { }

  //metodos de cada controlador
 
}
