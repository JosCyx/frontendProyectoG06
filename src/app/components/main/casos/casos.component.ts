import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Agente } from 'src/app/models/Agente';
import { Caso } from 'src/app/models/Casos';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-casos',
  templateUrl: './casos.component.html',
  styleUrls: ['./casos.component.css']
})
export class CasosComponent {

  autor = 'Edwin Mendoza Carrión';
  nombreCliente: string = this.authService.nombreCliente;
  fecha: Date = new Date();
  
  listCasos: Caso[] = this.authService.listCasos;
  listAgente: Agente[] = this.authService.listagentes;

  constructor(private authService: AuthService, private datePipe: DatePipe) { }

  consultarCasos(): void {
    const solicitudActiva = this.authService.listSolicitud.find(solicitud => solicitud.estado && !solicitud.estado2);
  
    if (solicitudActiva) {
      const agenteAsignado = this.asignarAgente();
      
      const caso: Caso = {
        nombreAgente: agenteAsignado.nombreAgente,
        descripcion: solicitudActiva.descripcion,
        prioridad: Math.round(Math.random() * 5),
        estado: agenteAsignado.estado,
        fecha: this.datePipe.transform(this.fecha, 'dd/MM/yyyy HH:mm') ?? ''
      };
  
      this.authService.listCasos.push(caso);
      solicitudActiva.estado2 = true;
    }
  }
  

  asignarAgente(): { nombreAgente: string, estado: boolean } {
    const agenteInactivo = this.listAgente.find((agente) => !agente.estado);

    if (agenteInactivo) {
      agenteInactivo.estado = true;
      return { nombreAgente: agenteInactivo.nombre, estado: true };
    } else {
      return { nombreAgente: 'No hay agentes disponibles', estado: false };
    }
  }
}
