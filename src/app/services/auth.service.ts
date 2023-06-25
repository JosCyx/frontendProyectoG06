/*este servicio contiene una propiedad isLogin la cual adquiere el valor de true cuando se inicia sesion,
por ahora se la utiliza para modificar el contenido de la barra de navegacion pero se podria utilizar este 
mismo serviico para alguna otra funcion que se requiera */

import { Injectable } from '@angular/core';
import { Solicitud } from '../models/Solicitud'
import { Agente } from '../models/Agente';
import { Caso } from '../models/Casos';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAdmin: boolean = false;
  isLogin: boolean = false;
  nombreCliente: string ='';


  listSolicitud: Solicitud[] = [
    {nombreEmpresa:'CocaCola', descripcion:'Solicito un pedido de 4 javas de colas de 1 1/4 L para la ciudad de guayaquil, a más tardar el dia jueves.', estado: false, estado2: false}
  ];

  listagentes: Agente[]=[
    {nombre: 'Agente 001', email:'agente1@gmail.com', empresa:'CocaCola', estado: false},
    {nombre: 'Agente 002', email:'agente2@gmail.com', empresa:'CocaCola', estado: false},
    {nombre: 'Agente 003', email:'agente3@gmail.com', empresa:'Pepsi', estado: false},
  ];

  listCasos: Caso[] = [];
  
  constructor() { }
}
