
const elMayor = (a,b)=>{
    return  (a > b) ? a : b;
}


const tieneMembresia = (miembro)=>{
    return  (miembro) ? '2$ verdes': '10$ verdes'
}



const amigo = false;
const amigosArr = [
    'Peter',
    'Tony', 
    'Thor',
    // este tipo de condicionales necesita ambos valores
    (amigo)?'Capitan America' : 'Loki',
    // (()=>'nick')(),// estos es funcion anonima autoinvocada
    elMayor(15,85)
];


// mas de una condicion con operador ternario
const nota = 86; // A, A+, B
const grado = (nota>=95)?'A+':
              (nota>=90)?'A':  
              (nota>=85)?'B+':
              (nota>=80)?'B':
              (nota>=75)?'C+': 
              (nota>=70)?'C': 'F'             

console.log(elMayor(51,50));
console.log(tieneMembresia(false));
console.log(amigosArr);
console.log({nota, grado});
console.table({nota, grado})