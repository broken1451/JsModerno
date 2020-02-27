
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
const ironman =  new Persona('tony', 04, 'yo soy ironman');
// console.log(ironman);

// si es un set funciona cmo cualquier otra propiedad
spiderman.setComida = 'Pastel de la tia May';
// spiderman.nemesis = 'Duende verde'
console.log(spiderman);

// si es un get funciona cmo cualquier otra propiedad
console.log(spiderman.getComida);






