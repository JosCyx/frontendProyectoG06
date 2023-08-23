import { Component,OnInit } from '@angular/core';
import { Sugerencia } from '../../../models/Sugerencias'
import { AuthService } from '../../../services/auth.service';
import { Observable } from 'rxjs';
import { ComunicationAPIService } from 'src/app/services/comunicationapi.service';


@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.css']
})
export class SugerenciasComponent implements OnInit{
  autor = 'Wilson Carrillo Neira';
  categoria: string ='';
  otraCategoria: string ='';
  satisfaccion: number = 0;
  comentario: string = '';
  detalles: string ='';
  fecha: Date = new Date;
  
  
  
  nombreCliente: string = this.authService.nombreCliente;
  showOtherCat: boolean = false;
  sugerencias$!: Observable<any[]>;

  constructor(private authService: AuthService, private comService: ComunicationAPIService) { }
  
  ngOnInit(): void {
    this.sugerencias$ = this.comService.getSugerenciasList();
  }
  
  enviarSugerencia() {
    const sugerencia = {
      cliente: this.authService.nombreCliente, // Reemplaza con el ID del cliente correspondiente
      comentario: this.comentario,
      Detalles: this.detalles, // Reemplaza con el ID de la encuesta correspondiente
    };

    this.comService.addSugerencias(sugerencia).subscribe(
      response => {
        console.log('Sugerencia enviada exitosamente.');
        this.limpiarCampos(); // Limpia los campos después de enviar la sugerencia
        this.ngOnInit();
      },
      error => {
        console.log('Error al enviar la sugerencia.',error);
      }
    );
  }

  limpiarCampos() {
    this.categoria = '';
    this.otraCategoria = '';
    this.satisfaccion = 0;
    this.comentario = '';
    this.detalles = '';
    this.fecha = new Date();
    this.showOtherCat = false;
  }

  checkCategoriaOtro() {
    if( this.categoria === 'otro'){
      this.showOtherCat = true;
    }
  }
}
