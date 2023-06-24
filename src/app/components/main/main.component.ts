import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  nombreCliente: string = this.authService.nombreCliente;
  autor = 'José Moreno Bravo';
  constructor(private authService: AuthService) { }
}
