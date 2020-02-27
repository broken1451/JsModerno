

class Persona {

    // una clase solo puede tener uns constructor
    // crear una nuva instacion con este metodo pero usando el constructor de la clase
    // static porObjeto(persona){
    static porObjeto({nombre, apellido, pais}=fer){
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais){
        this.nombre= nombre;
        this.apellido= apellido;
        this.pais=pais;
    }


    getInfo(){     
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`)
    }

}


const nombre1 = 'Melisa',
      apellido1 = 'Flores',
      pais1 = 'Honduras'


const fer = {
      nombre :'Adrain',
      apellido :'Flores',
      pais :'USA'
}

const persona1 = new Persona(nombre1, apellido1, pais1);
// const persona1 = new Persona(fer.nombre,fer.apellido,fer.pais);
const persona2 = Persona.porObjeto(fer);

persona1.getInfo()

console.log(persona2)
