import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isLogin: boolean = false;
  isAdmin: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.isLogin = this.authService.isLogin;
    this.isAdmin = this.authService.isAdmin;
  }

  logOut():void{
    this.authService.isAdmin = false;
    this.authService.isLogin = false;//define como false el valor de nuestra propiedad del servicio de autenticacion
    this.router.navigate(['login']);//redirige al componente login
  }

  home():void{
    if(this.isLogin === true){
      this.router.navigate(['main']);
    }else{
      this.router.navigate(['login']);
    }
  }
}