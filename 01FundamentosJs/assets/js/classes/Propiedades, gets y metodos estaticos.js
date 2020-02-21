
class Persona {

    // static sirve 
    /*
    La palabra clave static define un método estático para una clase. 
    Los métodos estáticos no se invocan en instancias de la clase. 
    En cambio, son llamados a la clase misma. Estas son a menudo funciones de utilidad, 
    como funciones para crear o clonar objetos.


    Las llamadas a métodos estáticos se realizan directamente en la clase y 
    no son invocables en instancias de la clase. Los métodos estáticos se utilizan 
    a menudo para crear funciones de utilidad.

    Son metodos y propiedades que la gente va a poder acceder sin la necesidad de crear una instacia
    */
    static _conteo = 0;
    static get getConteo(){
        return Persona._conteo + ' Instacias';
    }

    static mensaje(nombre){
        console.log(this.nombre);
        console.log('Hola soy un metodo statico ' + nombre);
    }


    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    // constructor(nombre='dsdsd', codigo='151', frase='dadasas') {
    constructor(nombre, codigo, frase) {
    //   console.log('HOLA');
     this.nombre =  nombre;
     this.codigo =  codigo;
     this.frase =  frase;
     Persona._conteo ++;
    }


    set setComida(comida){ // el ser recibe un parametro para establecer el valor de variable se recomienda solo uno
        // establecer un valor 
        this.comida = comida.toUpperCase();
    }


    get getComida(){
        // Es recomendable retornar en el get 
        return `la comida favorita de ${this.nombre} es ${this.comida}`
    }

    quienSoy(){
        console.log(`Yo soy ${this.nombre} y mi identidad es ${this.codigo}`)
    }


    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

}


const spiderman =  new Persona('Adrian', 04, 'lorem');
const ironman =    new Persona('tony', 04, 'yo soy ironman');
// console.log(ironman);

// si es un set funciona cmo cualquier otra propiedad
// spiderman.setComida = 'Pastel de la tia May';
// // spiderman.nemesis = 'Duende verde'
// console.log(spiderman);

// si es un get funciona cmo cualquier otra propiedad
// console.log(spiderman.getComida);

Persona._conteo;
Persona.getConteo;
Persona.mensaje('hello');
console.log('conteo estatico ', Persona._conteo);
console.log('conteo estatico ', Persona.getConteo);


// se puede crear un propiedades static fuera de la clase 
Persona.propiedadExterna = 'Hola Mundo';
console.log('Persona ', Persona);
console.log('Persona ', Persona.propiedadExterna);

