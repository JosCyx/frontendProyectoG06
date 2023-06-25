export class Caso{
    nombreAgente: string;
    descripcion: string;
    prioridad: number;
    estado: boolean;
    fecha: string;

    constructor(nombreagente: string, descripcion: string, prioridad: number, estado: boolean, fecha: string){
        this.nombreAgente = nombreagente;
        this.descripcion = descripcion;
        this. prioridad = prioridad;
        this.estado = estado;
        this.fecha = fecha;
    }
}