/*este servicio contiene una propiedad isLogin la cual adquiere el valor de true cuando se inicia sesion,
por ahora se la utiliza para modificar el contenido de la barra de navegacion pero se podria utilizar este 
mismo serviico para alguna otra funcion que se requiera */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAdmin: boolean = false;
  isLogin: boolean = false;
  nombreCliente: string ='';
  
  constructor() { }
}
