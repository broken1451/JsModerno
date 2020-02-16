


// console.warn(miNombre1);

// comentarios
// declaracion de variables
let a1 = 10,
    b1 = 'hola ',
    c1 = 'Batman';
let a = 10;
let b = 10;
let x = a + b;
let x1 = a1 + b1;
const c = 10;


const saludo = b1 + c1;
// c = 45 no se puede hacer 

a = 20;
b = 45;

console.log('x', x);
console.warn(x1);
console.info(c1);
console.error(b1);
console.warn({x1});
console.info({c1});
console.error({b1});

// cambiar el color en la consola
// console.log('%c(% es para inscrustar un estilo)', 'propiedades de css');
console.log('%c Mis variables', 'color: blue; font-weight:bold');


console.table({a, b ,c, x });
console.log(saludo);

// se puede usar asi y llamar desde otro archivo a la variable pero se debe respertar el orden 
var miNombre = 'Adrian';
let outerWidth = 2000000000000; // propiedades para usar como respondive
const outerHeight = 400000000000000000;  // propiedades para usar como respondive

// let y const no sobreescriben las variables del objeto window, o donde este corriendo js
let miNombre1 = 'JOSE';