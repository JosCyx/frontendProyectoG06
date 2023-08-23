import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Solicitud } from 'src/app/models/Solicitud'
import { Observable } from 'rxjs';
import { ComunicationAPIService } from 'src/app/services/comunicationapi.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})

export class SolicitudesComponent {
  autor = 'Dayana Morocho Choez';

  nombreEmpresa = "";
  descpricion = "";
  estado = false;

  changeview: string = 'request';
  mensajeExito: string = '';
  nombreCliente: string = this.authService.nombreCliente;

  listSolicitud: any[] = this.authService.listSolicitud;

  solicitudes$!: Observable<any[]>;


  constructor(private authService: AuthService, private comService: ComunicationAPIService) { }

  ngOnInit(): void {
    this.solicitudes$ = this.comService.getSolicitudesList();
    this.solicitudes$.subscribe((data) =>
      this.listSolicitud = data
    );

  }

  changeView(view: string): void {
    this.changeview = view;
  }

  /*"id": 0,
  "clienteId": 0,
  "empresaId": 0,
  "descripcionSolicitud": "string",
  "estadoSolicitud": "string",
  "fechaCreacion": "2023-08-22T23:20:28.021Z"*/
  registrarSolicitud(): void {
    const data = {
      clienteId: this.authService.nombreCliente,
      empresaId: this.nombreEmpresa,
      descripcionSolicitud: this.descpricion,
      estadoSolicitud: 'false',
      fechaCreacion: new Date
    }

    this.comService.addSolicitudes(data).subscribe(
      response =>{
        console.log("Exito");
        this.ngOnInit();
      },
      error => {
        console.log("Error:",error);
      }
    );

    this.nombreEmpresa = "";
    this.descpricion = "";
    this.estado = false;

    this.mensajeExito = 'Solicitud registrada exitosamente.';
    setTimeout(() => { this.mensajeExito = ''; }, 3000);
  }

  confirmarCaso(indice: number): void {
    this.authService.listSolicitud[indice].estado = true;
  }

  eliminarSolicitud(indice: number): void {
    this.authService.listSolicitud.splice(indice, 1);

  }
}
