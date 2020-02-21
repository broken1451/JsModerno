
class Persona {

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
    }


}


const spiderman =  new Persona('Adrian', 04, 'lorem');
const ironman =  new Persona('tony', 04, 'yo soy ironman');
console.log(spiderman);
console.log(ironman);






