export class Usuario{

    nombre: string;
    user: string;
    email: string;
    pass: string;


    constructor( nombre: string, user: string, email: string, pass: string){
        this.nombre=nombre;
        this.user=user;
        this.email=email;
        this.pass=pass;
    }
}