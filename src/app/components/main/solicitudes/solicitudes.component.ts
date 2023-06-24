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

  listSolicitud: Solicitud[] = [
    {nombreEmpresa:'CocaCola', descripcion:'Solicito un pedido de 4 javas de colas de 1 1/4 L para la ciudad de guayaquil, a más tardar el dia jueves.', estado: false}
  ];


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
      estado: this.estado
    }

    this.listSolicitud.push(solicitud);

    this.nombreEmpresa="";
    this.descpricion="";
    this.estado=false;

    this.mensajeExito = 'Solicitud registrada exitosamente.';
    setTimeout(() => {this.mensajeExito = '';    }, 3000);
  }

  confirmarCaso(indice: number): void{
    this.listSolicitud[indice].estado = true; 
  }

  eliminarSolicitud(indice:number):void{
    this.listSolicitud.splice(indice,1);

  }
}
