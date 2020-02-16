
const personaje = {
    nommbre: 'Tony Stark',
    codName: 'IronMan',
    vivo: false,
    edad: 40,
        coods: {
            lat: 34.034,
            lng: -118.70
        },
   traje: ['Mark 1 ','Mark V','HulkBuster'],
        direccion: {
            zip: '10880, 90265',
            ubicacion:'Malibu, California'
        },
    ultima_pelicula: 'Infinity War',
    'ultima-pelicula': 'Infinity War',
}


console.log(Object.keys(personaje))

console.log(personaje)
console.log('Nombre ', personaje.nommbre)
console.log('Nombre ', personaje['nommbre'])
console.log('Edad ', personaje.edad)
console.log('Edad ', personaje['edad'])
console.log('Coodernadas ', personaje.coods)
console.log('Latitud ', personaje.coods.lat)
console.log('Nro de trajes ', personaje.traje.length)
console.log('Ultimo de trajes ', personaje.traje[personaje.traje.length-1])


const vivo = 'vivo'; // hace referencia al objeto con la propiedad vivo
console.log('Vivo ', personaje[vivo])


console.log('ultima-pelicula ', personaje['ultima-pelicula']);// para este tipo se debe usar la notacion de corchetes la de punto no es permitida




// Mas detalles 
// borrar una propiedad de un ibjeto, delete antes de la propiedad q se quiere eliminar
delete personaje.edad;
console.log(personaje)


// crear una nueva propiedad q se va acrear en momento de ejecucion
personaje.casado = true;

// poner el objeto como un arreglo
const entriPares = Object.entries(personaje)
console.log(entriPares)

console.log(personaje)
console.log(Object.keys(personaje));

// bloque de propiedades dentro de un objeto, no se puede asignar valor a las propiedades directas del objeto, pero no a los objetos dentro del minmo 
Object.freeze(personaje);
personaje.dinero = 123456;
console.log(personaje)

personaje.direccion.ubicacion = 'Chile';
console.log(personaje)


// listado de todas las propiedades que tenga un objeto 
const propiedades = Object.getOwnPropertyNames(personaje)// listado de todas las propiedades de un objetos
const valores = Object.values(personaje)// valor de todoas las propiedades
console.log(propiedades)
console.log(valores)
console.log(propiedades,valores)

console.table(propiedades)



