// un singleTon es una instacia unica de mi clase

class SingleTon {


    static instacia; // undefiined
    nombre = '';

    constructor(nombre= ''){
    //    const a  = undefined;
    //    console.log( a);
    //    console.log( !a);
    //    console.log( !!a);

        console.log( SingleTon.instacia);
        if (!!SingleTon.instacia) {
            return  SingleTon.instacia;
        }
        SingleTon.instacia = this; // apunta a toda la clase
        this.nombre = nombre;
        console.log( SingleTon.instacia);
        // return this;
    }

}


// Depende del ordem 

const instacia1 =  new SingleTon('Adrain');
const instacia3 =  new SingleTon('thor');
const instacia2 =  new SingleTon('Spiderman');
console.log( instacia1);
console.log( instacia1.nombre);
console.log( instacia2);
console.log( instacia2.nombre);
console.log( instacia3);
console.log( instacia3.nombre);



