let a = 9;

if (a >= 10) { // undefined, null, una asignacion
    console.log('A es mayor a 10')
} else {
    console.log('A es menor a 10')
}
console.log('Fin')



const hoy = new Date();
let dia = hoy.getDay();

console.log(hoy)
console.log({dia})


// if (dia === 0 ) {
//     console.log('Es domingo')
// } else {
//     if (dia === 1) {
//         console.log('Es Lunes')
//     } else {
//         console.log('No es Lunes ni Domingo')
//     }
// }


if (dia === 0 ) {
    console.log('Es domingo')
} else if (dia === 1) {
    console.log('Es Lunes')
} else if (dia === 2) {
    console.log('Es Martes')
}else if (dia === 3) {
    console.log('Es Miercoles')
}else if (dia === 4) {
    console.log('Es Jueves')
}else if (dia === 5) {
    console.log('Es Viernes')
}else if (dia === 6) {
    console.log('Es Sabado')
} else {
    console.log('No esxiste otros dias')
}

  
/////////////////////////////////////////////////////////////////////////////////////////////////

// sin usar if else o switch, unicamente objetos


dia = 5;
console.log({dia})
let diasSemanas = {
    0:'Domingo',
    1:'Lunes',
    2:'Martes',
    3:'Miercoles',
    4:'Jueves',
    5:'Viernes',
    6:'Sabado',
}

let diasSemanas1 = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
];

console.log(diasSemanas[dia] || 'Dia no valido');
console.log(diasSemanas1[dia] || 'Dia no valido');
