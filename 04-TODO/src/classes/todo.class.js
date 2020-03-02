
 export class TODO{


    constructor(tarea){
        this.tarea = tarea;

        // estas se crean al instante
        this.id = new Date().getTime();
        this.completado = true;
        this.creado = new Date();
    }


 }