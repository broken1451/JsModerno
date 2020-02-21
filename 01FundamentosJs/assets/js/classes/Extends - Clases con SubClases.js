
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




// herencia
class Heroe extends Persona {

    clan = 'Sin clan';

    constructor(nombre, codigo, frase){
        //primero se llama al super  y despues se usa el this, esto es una regla
        super(nombre, codigo, frase); //hace referencia al constructor de la clase q se esta heredando
        this.clan =  'Los abenllers'
    }


    quienSoy(){
        console.log(`soy ${this.nombre} , ${this.clan}`);
        /*
        se llama metodo o propiedades de la clase padre de la siguiente 
        manera para mantener los metodos o llamar a uno solo depende de cual se necesite.
        */
        super.quienSoy();
    
    }


}







const spiderman =  new Persona('Adrian', 04, 'lorem');
const thor =  new Heroe('Adrian', '04', 'lorem');


console.log(thor)
thor.quienSoy();



