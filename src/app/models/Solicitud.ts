export class Solicitud{
    nombreEmpresa: string;
    descripcion: string;
    estado: boolean;
    estado2: boolean;
    
    constructor(nombreEmpresa: string, descripcion: string, estado: boolean, estado2: boolean){
        this.nombreEmpresa = nombreEmpresa;
        this.descripcion = descripcion;
        this.estado = estado;
        this.estado2 = estado2;
    }
}