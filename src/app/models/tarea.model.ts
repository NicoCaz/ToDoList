export class Tarea{
    titulo:string;
    descripcion:string;
    completo:boolean;
    constructor(titulo="",descripcion=""){
        this.titulo=titulo;
        this.descripcion=descripcion;
        this.completo=false;
    }

}