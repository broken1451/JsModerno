
const fer = {
    nombre: 'Fer',
    edad: 30,
    imprimir(){
        console.log(`Nombre ${this.nombre} - Edad ${this.edad}`)
    }
}

const pedro = {
    nombre: 'Fer',
    edad: 20,
    imprimir(){
        console.log(`Nombre ${this.nombre} - Edad ${this.edad}`)
    }
}


// fer.imprimir()

// Esto se debe de crear con la palabra new
function Persona(nombre, edad) {


    console.log('se ejecuto esta liea');
    // el this esta haciendo referencia a la funcion 
    this.nombre = nombre
    this.edad = edad

    this.imprimir = ()=>{
        console.log(`Nombre ${this.nombre} - Edad ${this.edad}`)
    }
    
}

// crear una nueva instacia
const maria  = new  Persona('maria', 18);
const melisa  = new  Persona('Melissa', 25);
console.log(maria);
maria.imprimir();
melisa.imprimir();
























