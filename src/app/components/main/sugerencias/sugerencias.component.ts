import { Component } from '@angular/core';
import { Sugerencia } from '../../../models/Sugerencias'
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.css']
})
export class SugerenciasComponent {
  autor = 'Wilson Carrillo Neira';
  categoria: string ='';
  otraCategoria: string ='';
  satisfaccion: number = 0;
  comentario: string = '';
  detalles: string ='';
  fecha: Date = new Date;
  
  
  nombreCliente: string = this.authService.nombreCliente;
  showOtherCat: boolean = false;
  sugerencia: Sugerencia = new Sugerencia();
  historialSugerencias: Sugerencia[] = [];

  constructor(private authService: AuthService) { }
  

  enviarSugerencia() {
    const sugerencia: Sugerencia = {
      comentario: this.comentario,
      detalles: this.detalles,
      categoria: this.categoria,
      otraCategoria: this.otraCategoria,
      satisfaccion: this.satisfaccion,
      fecha: this.fecha
    }
    this.historialSugerencias.push(sugerencia);

    this.categoria ='';
    this.otraCategoria ='';
    this.satisfaccion = 0;
    this.comentario= '';
    this.detalles ='';
    this.fecha = new Date;    
  }

  checkCategoriaOtro() {
    if( this.categoria === 'otro'){
      this.showOtherCat = true;
    }
  }
}
