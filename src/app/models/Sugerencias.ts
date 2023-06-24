export class Sugerencia {
    comentario: string;
    detalles: string;
    categoria: string;
    otraCategoria: string;
    satisfaccion: number;
    fecha: Date;
  
    constructor() {
      this.comentario = '';
      this.detalles = '';
      this.categoria = '';
      this.otraCategoria ='';
      this.satisfaccion = 0;
      this.fecha = new Date();
    }
  }