export class Agente{
    nombre: string;
    email: string;
    empresa: string;
    estado: boolean;

    constructor(nombre: string, email:string, empresa: string, estado:boolean){
        this.nombre = nombre;
        this.email = email;
        this.empresa = empresa;
        this.estado = estado;
    }
}