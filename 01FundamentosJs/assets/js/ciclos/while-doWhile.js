
const guitarras = ['Jackson','ESP','BCRich','Fender','LTD','DAndre'];


// se ejecuta simepre siempre y cuando la condicion sea verdadera
// while (condition) {
    
// }

let i = 0;

console.warn(' While')
// while ( i < guitarras.length) {
    
//     // console.log({guitarras});
//     console.log(guitarras[i]);
//     i++;

// }


//estas cosas se consideram falsos
//undefined
//null
//false

// console.log(guitarras[10]);
// while ( guitarras.length[i]) {
//     // console.log({guitarras});
//     console.log(guitarras[i]);
//     i++;

// }

// while ( guitarras[i] ) {
while ( i < guitarras.length) {

//    if (i === 1) {
//        break;      
//    }

   if (i === 1) {
       i++; 
       continue;     
   }

    console.log(guitarras[i]);
    i++;

}


console.warn('Do While');// se ejecuta al menos una vez

// do {
    


// } while (condicion sea correcta se ejecuta);


let j= 0;
do {
    
    console.log(guitarras[j]);
    j++;
} while (j < guitarras.length);



console.warn(' While')

let k =0;
let numeros = 20;

while ( k <= numeros) {
    // console.log(numeros[k]);
    console.log(k);
    // k++
    k = k +2;
}


console.warn('Do While')

let w = 0;
do {
    console.log(w);
    // w++;
    w = w+2
    
} while (w <= numeros);


console.warn(' While')

let l =0;
let personas = ['Jackson','ESP','BCRich','Fender','LTD','DAndre'];

while ( l < personas.length) {
    // console.log(numeros[k]);
    // console.log(l);
    console.log(personas[l]);
    l++;
}



console.warn('Do While')

let t = 0;
do {
    console.log(personas[t]);
    // console.log(t);
    t++;
    
} while (t < personas.length);


















