
class Persona {

    nombre = '';
    codigo = '';
    frase  = '';

    // constructor(nombre='dsdsd', codigo='151', frase='dadasas') {
    constructor(nombre, codigo, frase) {
        //   console.log('HOLA');
         this.nombre =  nombre;
         this.codigo =  codigo;
         this.frase =  frase;
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
const ironman =  new Persona('tony', 04, 'yo soy ironman');
console.log(spiderman);
console.log(ironman);
spiderman.quienSoy();
ironman.quienSoy();
spiderman.miFrase();












