export class Solicitud{
    nombreEmpresa: string;
    descripcion: string;
    estado: boolean;
    
    constructor(nombreEmpresa: string, descripcion: string, estado: boolean){
        this.nombreEmpresa = nombreEmpresa;
        this.descripcion = descripcion;
        this.estado = estado;
    }
}