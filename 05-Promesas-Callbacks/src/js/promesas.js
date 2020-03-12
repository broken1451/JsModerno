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



export const buscarHeroe = (id) =>{
    
    //const heroe = heroes[id] es lo mismo con la notacion de puntos heroes.capi, heroes.ironman(es el id)
    const heroe = heroes[id];

     return new Promise((resolve, reject) => {

        if (heroe) {
            // callback(error siempre si viene correcto el error es un null,heroe);        
            resolve(heroe)      
        } else {
            // error, siempre el primer argumento es un error
            // callback(heroe);        
            reject(`no existe el heroe con el id ${id}`);        
        }
    

     });

}


const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promesa lenta')
    }, 2000);
});

const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('promesa media')
    }, 1500);
});

const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('promesa rapida')
    }, 1000);
});


export {
    promesaLenta,promesaMedia,promesaRapida
}
