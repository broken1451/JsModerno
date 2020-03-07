
 export class TODO{

    // para regresar un arreglo de TODO
     static fromJson({id, tarea, completado, creado } = tarea){
         const objTemporal = new TODO(tarea);
               objTemporal.id = id;
               objTemporal.completado = completado;
               objTemporal.creado = creado;
               console.log(`Esto es objTemporal:${objTemporal}`)
        return objTemporal;
     }

    constructor(tarea){
        this.tarea = tarea;

        // estas se crean al instante
        this.id = new Date().getTime();
        this.completado = true;
        this.creado = new Date();
    }

    imprimirClase(){
        console.log(`Esto es la tarea y el id ${this.tarea} - ${this.id}`)
    }
 }