/*
*Dias de la semana abrimos a las 11
* pero los fines de semana abrimos a las 9
*/
// Entra a un sitio web, para consultar si esta abierto hoy 


const dia = 6; // 0 es domingo 
const horaActual = 10;

let horaApertura;
let mensaje;// esta abierto, esta cerrado, abrimos a las xx


// if (dia  === 0 || dia === 6 ) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Dia de semana');
//     horaApertura = 11;
// }

// if (horaActual >= horaApertura) {
//     mensaje = 'Esta abierto'
//     console.log('Esta abierto', mensaje)
// } else {
//     mensaje = `Esta cerrado hoy abrimos a las ${horaApertura}`
//     console.log('Esta cerrado', mensaje)
// }



// if (dia  === 0 || dia === 6 ) {
    // include(para saber si algo existe dentro de ese arreglo )
// if ([0,6].includes(dia)) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Dia de semana');
//     horaApertura = 11;
// }


// operador ternario
// horaApertura =  ([0,6].includes(dia))?siexiste 9 :else 11
horaApertura =  ([0,6].includes(dia))?9 : 11

mensaje = (horaActual >= horaApertura)? 'Esta abierto' : `Esta cerrado hoy abrimos a las ${horaApertura}`

// if (horaActual >= horaApertura) {
//     mensaje = 'Esta abierto'
//     console.log('Esta abierto', mensaje)
// } else {
//     mensaje = `Esta cerrado hoy abrimos a las ${horaApertura}`
//     console.log('Esta cerrado', mensaje)
// }


console.log({horaApertura, mensaje})













