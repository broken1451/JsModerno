
class Rectangulo {

   #area = 0; // Porpiedad privada en javascriot

    constructor(base = 0, altura = 0){
        this.base = base;
        this.altura = altura;
        this.#area = (base * altura) / 2
    }

    calcularArea(){
        console.log(this.#area * 2);
    }

}


// TODO setear las propiedades con set y obtenerlas get;

const rec =  new Rectangulo(10,15);
// rec.#area = 100;
console.log(rec);
rec.calcularArea()
























