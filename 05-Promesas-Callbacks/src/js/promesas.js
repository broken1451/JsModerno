export const heroes = {
    capi:{
        nombre:'Capitan America',
        poder: 'Consumir drogas'
    },
    iroman:{
        nombre:'IRON MAN',
        poder: 'Dinero en exceso'
    },
    thor:{
        nombre:'Thor',
        poder: 'Poder del rayo '
    },
}



// export const buscarHeroe = (id) =>{
//     //const heroe = heroes[id] es lo mismo con la notacion de puntos heroes.capi, heroes.ironman(es el id)
//     const heroe = heroes[id];

//      return new Promise((resolve, reject) => {

//         if (heroe) {
//             // callback(error siempre si viene correcto el error es un null,heroe);        
//             resolve(heroe)      
//         } else {
//             // error, siempre el primer argumento es un error
//             // callback(heroe);        
//             reject(`no existe el heroe con el id ${id}`);        
//         }
//      });
// }


// con await
export const buscarHeroe = (id) =>{
    
    //const heroe = heroes[id] es lo mismo con la notacion de puntos heroes.capi, heroes.ironman(es el id)
    const heroe = heroes[id];

     return new Promise((resolve, reject) => {

        if (heroe) {
            // callback(error siempre si viene correcto el error es un null,heroe);        
            setTimeout(() => {
                resolve(heroe)   
            }, 1000);   
        } else {
            // error, siempre el primer argumento es un error
            // callback(heroe);        
            reject(`no existe el heroe con el id ${id}`);        
        }
    

     });
}


// con async
export const buscarHeroeAsync = async (id) =>{ // la palabra async transforma la funcion a una promesa 
    
    //const heroe = heroes[id] es lo mismo con la notacion de puntos heroes.capi, heroes.ironman(es el id)
    const heroe = heroes[id];

        if (heroe) {
            // callback(error siempre si viene correcto el error es un null,heroe);        
            // resolve(heroe);
            return heroe; //es lo mismo q un resolve
        } else {
            // error, siempre el primer argumento es un error
            // callback(heroe);  esto es el throw      
            // reject(`no existe el heroe con el id ${id}`);    
            // el error se trabaja de dos maneras la forma tradicional o la actual o inesperado
            // tradicional
            // throw `no existe el heroe con el id ${id}`;
            // Actual
            throw Error(`no existe el heroe con el id ${id}`);
        }
}

// const promesaLenta = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('promesa lenta')
//     }, 2000);
// });

// const promesaMedia = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('promesa media')
//     }, 1500);
// });

// const promesaRapida = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('promesa rapida')
//     }, 1000);
// });


// export {
//     promesaLenta,promesaMedia,promesaRapida
// }
