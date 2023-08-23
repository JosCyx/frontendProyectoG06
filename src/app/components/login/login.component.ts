import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { ComunicationAPIService } from 'src/app/services/comunicationapi.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  autor = 'José Moreno Bravo';

  //propiedades del modelo usuario
  nombre='';
  user='';
  email='';
  pass='';

  //propiedades que almacenan los valores de inicio de sesion
  usernameLogin='';
  passLogin='';

  //propiedades para la funcionalidad de la vista
  activeForm: string = 'login'; //cambia entre formularios
  checked: boolean = false; //verifica si esta seleccionado el check del registro
  confirmPass: string = ''; //almacena la contraseña sonfirmada 
  passwordVisible = false; //pemite el intercambio del input de contraseña entre type=password y type=text
  mensajeText: string = ''; //guarda un mensaje de error para mostrar
  showMsjPassConfirm: boolean = false; // Variable para controlar la visibilidad del mensaje
  showMsjUsuario: boolean = false;// Variable para controlar la visibilidad del mensaje del usuario incorrecto
  showMsjPass: boolean = false;// Variable para controlar la visibilidad del mensaje de la contraseña incorrecta
  

  //lista que almacena los usuarios creados (se añadio un usuario administrador por defecto)
  listUser: Usuario[] = [
    { nombre: 'Administrador', user: 'admin', email: 'admin@admin.com', pass: 'admin' },
    { nombre: 'Maria Pepa', user: 'maria123', email: 'maria@gmail.com', pass: 'maria123' }
  ];
  
  constructor(private router: Router, private authService: AuthService, private comService: ComunicationAPIService) { }

  changeForm(form: string) {//permite el cambio entre formularios
    this.activeForm = form;
  }

  onCheckboxChange(): void {//verifica que el check este seleccionado
    this.checked = !this.checked; 
  }
  
  togglePasswordVisibility(): void {//cambia entre contraseña visible o no
    this.passwordVisible = !this.passwordVisible;
  }

  mensaje(mensaje: string): void {//recibe un parametro string y lo muestra segun la condicion
    this.showMsjPassConfirm = false; 
    this.showMsjUsuario = false;
    this.showMsjPass = false;

    if (mensaje === 'Las contraseñas no coinciden.'){
      this.showMsjPassConfirm = true; // Mostrar el mensaje
      this.mensajeText = mensaje; // Asigna el mensaje recibido a la variable
    }else if(mensaje === 'Usuario no encontrado'){
      this.showMsjUsuario= true; 
      this.mensajeText = mensaje;
    }else if(mensaje === 'Contraseña incorrecta o no existe'){
      this.showMsjPass = true; 
      this.mensajeText = mensaje;
    }
  }

  iniciarSesion(user: string, password: string){//verifica que las credenciales ingresadas existan en la base de datos y redirige a la siguiente vista
    
    this.comService.iniciarSesion(user, password).subscribe(
      (response) => {
        this.authService.nombreCliente = response.nombre;
        this.authService.isAdmin = true;
        this.authService.isLogin = true;
        // Ejemplo: Redirige a la siguiente vista
        this.router.navigate(['main']);

        // Ejemplo: Muestra un mensaje de éxito
        this.mensaje('Inicio de sesión exitoso');
      },
      (error) => {
        // Error en el inicio de sesión
        // Maneja el error según sea necesario
        this.mensaje('Credenciales incorrectas');
      }
    );
    

  }


 /* registrarUsuario():void{//añade un usuario a la lista y redirige inmediatamente al formulario login para iniciar sesion
    if (this.pass !== this.confirmPass) {
      this.mensaje('Las contraseñas no coinciden.');
      return;
    }

    const usuario: Usuario = {
      nombre: this.nombre,
      user:this.user,
      email: this.email,
      pass: this.pass
    }

    this.listUser.push(usuario);

    this.nombre='';
    this.user='';
    this.email='';
    this.pass='';
    this.confirmPass='';

    this.activeForm = 'login'//al definir activeForm=login se muestra el formulario de inicio de sesion
  }*/

  registrarUsuario(): void {
    if (this.pass !== this.confirmPass) {
      this.mensaje('Las contraseñas no coinciden.');
      return;
    }

    this.comService.getUsersList().subscribe(
      (usuarios) => {
        // Encuentra el último ID disponible
        const ultimoId = usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;

        const nuevoUsuario = {
          id: ultimoId,
          nombre: this.nombre,
          nombreUsuario: this.user,
          correoElectronico: this.email,
          contraseña: this.pass,
          rolId: 0 // Ajusta el ID del rol según tus necesidades
        };

        this.comService.addUsers(nuevoUsuario).subscribe(
          () => {
            this.mensaje('Usuario registrado exitosamente.');
            // Redirige al formulario de inicio de sesión
            this.router.navigate(['login']);
          },
          (error) => {
            this.mensaje('Error al registrar el usuario.');
          }
        );
      },
      (error) => {
        this.mensaje('Error al obtener la lista de usuarios.');
      }
    );
  }

  
}
