

let a = 10;
let b = a;

a= 40;

console.log({a,b})



// en JS todos los objetos son pasados por referencia y todos los valores primitivos son pasados por valor 
let juan  = {
    nombre: 'Juan',
}

let ana = {...juan};// romper la referencia, crear una copia de un objeto

ana.nombre = 'Ana'
console.log({juan,ana})



const cambiaNombre = ({...persona}) =>{ //los 3 puntos dentro de una funcion es rest(une todos los argumentos en una sola variable y transformalo en un arreglo  ) y fuera de una funcion es spread(separa los elemntos) y rompe la refrencia
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre:'Peter'}
let tony = cambiaNombre(peter)

console.log({peter,tony})



// arreglos 

const frutas = ['Manzana', 'Pera','Patilla']
console.time('spread')// medir rendimiento en funciones de js
const otrasFrutas2 = [...frutas];// romper relacion con ...
console.timeEnd('spread')

console.time('slice')
const otrasFrutas = [frutas.slice()];// romper relacion con slice()
console.timeEnd('slice')


otrasFrutas.push('Mango')


console.table({frutas, otrasFrutas})
























