
let juegos = ['Final fantasys','Metal Gear','Crash Bandicout','Blody Roar']

console.log('largo', juegos.length);

// let primero =  juegos[0]
let primero =  juegos[2-2]
let ultimo =  juegos[juegos.length-1];// obtener la ultima pocicion de un arreglo 



console.log('primero', primero);
console.log('ultimo', ultimo);
console.log({primero, ultimo});
console.table({primero, ultimo})

// Recorrer un arreglo y te devuelve unp nuevo 
juegos.forEach((juego,index, arr)=>{
    console.log({juego})
    console.log({...arr})
    console.log({juego, index, arr})
});


// colocar al final del elemento
let nuevoArreglo = juegos.push('F-Zero');
console.log({nuevoArreglo, juegos})


// colocar al principio del arreglo
let nuevoArreglo1= juegos.unshift('Snake');
console.log({nuevoArreglo1, juegos})


// // borrar el ultimo
let nuevoArreglo2=juegos.pop()
console.log({nuevoArreglo2, juegos})



// borrar un pocicion exacta
let pocisionBorrada = 1;
console.log(juegos)
let nuevoArreglo3 = juegos.splice(pocisionBorrada,2)
console.log({nuevoArreglo3, juegos})


// saber la pocicion se encuentra un objeto
// si indexOf regresa -1 quiere decir q no lo encontro
let nuevoArreglo4 = juegos.indexOf('Blody Roar')
console.log({nuevoArreglo4, juegos})









