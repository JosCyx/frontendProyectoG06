import { Component} from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Solicitud } from 'src/app/models/Solicitud'

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})

export class SolicitudesComponent{
  autor = 'Dayana Morocho Choez';

  nombreEmpresa = "";
  descpricion = "";
  estado = false;

  changeview: string = 'request'; 
  mensajeExito: string = '';
  nombreCliente: string = this.authService.nombreCliente;

  listSolicitud: Solicitud []= this.authService.listSolicitud;


  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }
  
  changeView(view: string): void {
    this.changeview = view;
  }

  registrarSolicitud(): void{
    const solicitud: Solicitud = {
      nombreEmpresa: this.nombreEmpresa,
      descripcion: this.descpricion,
      estado: this.estado,
      estado2: false
    }

    this.authService.listSolicitud.push(solicitud);

    this.nombreEmpresa="";
    this.descpricion="";
    this.estado=false;

    this.mensajeExito = 'Solicitud registrada exitosamente.';
    setTimeout(() => {this.mensajeExito = '';    }, 3000);
  }

  confirmarCaso(indice: number): void{
    this.authService.listSolicitud[indice].estado = true; 
  }

  eliminarSolicitud(indice:number):void{
    this.authService.listSolicitud.splice(indice,1);

  }
}
