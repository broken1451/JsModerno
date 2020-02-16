

function crearPersona(nombre,apellido) {
    // return {
    //     nombre: nombre,
    //     aoellido: apellido
    // }
    return {
         nombre,
         apellido
        }
}

const personaFlecha = (nombre,apellido)=>{
    // return {
    //     nombre: nombre,
    //     aoellido: apellido
    // }
    return {
         nombre,
         apellido
        }
}

const personaFlecha1 = (nombre,apellido)=>({ nombre,apellido })





const persona = crearPersona('Adrian','Jose');
console.log(persona)
console.log(personaFlecha('Adrian','Jose'))
console.log(personaFlecha1('Adrian','Jose'))



function imprimeArgumentos() {
    console.log(arguments);
}

// despues del parametro rest no puede venir otro argumento
const argumentosFlecha = (edad ,...arguments) => {
    // console.log(edad);
    // console.log(arguments);
    return arguments;
}



imprimeArgumentos(12,true,false, 'Hola')


// const argumento = argumentosFlecha(12,true,false, 'Hola')
// darle un nombre a pociciones del arreglo
const [vivo, casado, nombre] = argumentosFlecha(12,true,false, 'Hola')
console.log({ vivo, casado, nombre});

// const {apellido: valor de la variable} = crearPersona('Adrian','Jose');
const {apellido: nuevoApellido} = crearPersona('Adrian','Jose');
console.log({nuevoApellido})



// desestructuracion de objetos argumentos
const tony = {
    nombre: 'Tony Stark',
    codName: 'IronMan',
    vivo: false,
    // edad: 40,      
    traje: ['Mark 1 ','Mark V','HulkBuster']
}

// const imprimePropiedades = (persona)=>{
//     console.log('nombre: ',persona.nombre);
//     console.log('codname: ',persona.codName);
//     console.log('vivo: ',persona.vivo);
//     console.log('edad: ',persona.edad);
//     console.log('trajes: ',persona.traje);
// }


const imprimePropiedades = ({nombre, codName, vivo, edad=15, traje})=>{

    edad = edad || 0;
 console.table({nombre, codName, vivo ,edad, traje})
}

imprimePropiedades(tony);












