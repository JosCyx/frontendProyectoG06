import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationAPIService {

  readonly APIUrl = "https://localhost:7102/api";

  constructor(private http: HttpClient) { }

  //ROLES
  getRolsList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Roles');
  }

 
  getRolById(id: number): Observable<any> {
    return this.http.get<any>(this.APIUrl + `/Roles/${id}`);
  }


  addRols(data: any) {
    return this.http.post(this.APIUrl + '/Roles', data);
  }

  
  updateRols(id: number | string, data: any) {
    return this.http.put(this.APIUrl + `/Roles/${id}`, data);
  }

 
  deleteRols(id: number | string) {
    return this.http.delete(this.APIUrl + `/Roles/${id}`);
  }

  //USUARIOS
  getUsersList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Usuarios');
  }

 
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(this.APIUrl + `/Usuarios/${id}`);
  }


  addUsers(data: any) {
    return this.http.post(this.APIUrl + '/Usuarios', data);
  }

  
  updateUsers(id: number | string, data: any) {
    return this.http.put(this.APIUrl + `/Usuarios/${id}`, data);
  }

 
  deleteUsers(id: number | string) {
    return this.http.delete(this.APIUrl + `/Usuarios/${id}`);
  }

  iniciarSesion(usuario: string, contrasenia: string): Observable<any> {
    const url = `${this.APIUrl}/Usuarios/Login?usuario=${usuario}&contrasenia=${contrasenia}`;
    return this.http.get(url);
  }

  //SOLICITUDES
  getSolicitudesList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Solicitudes');
  }

 
  getSolicitudById(id: number): Observable<any> {
    return this.http.get<any>(this.APIUrl + `/Solicitudes/${id}`);
  }


  addSolicitudes(data: any) {
    return this.http.post(this.APIUrl + '/Solicitudes', data);
  }

  
  updateSolicitudes(id: number | string, data: any) {
    return this.http.put(this.APIUrl + `/Solicitudes/${id}`, data);
  }

 
  deleteSolicitudes(id: number | string) {
    return this.http.delete(this.APIUrl + `/Solicitudes/${id}`);
  }
  
  //SUGERENCIAS
  getSugerenciasList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Sugerencias');
  }

 
  getSugerenciaById(id: number): Observable<any> {
    return this.http.get<any>(this.APIUrl + `/Sugerencias/${id}`);
  }


  addSugerencias(data: any) {
    return this.http.post(this.APIUrl + '/Sugerencias', data);
  }

  
  updateSugerencias(id: number | string, data: any) {
    return this.http.put(this.APIUrl + `/Sugerencias/${id}`, data);
  }

 
  deleteSugerencias(id: number | string) {
    return this.http.delete(this.APIUrl + `/Sugerencias/${id}`);
  }
}
