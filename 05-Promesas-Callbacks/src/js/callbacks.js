

const heroes = {
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


export const buscarHeroe = (id, callback) => {


    // const heroe = heroes[id] es lo mismo con la notacion de puntos heroes.capi, heroes.ironman(es el id)
    const heroe = heroes[id]

    if (heroe) {
        // callback(error siempre si viene correcto el error es un null,heroe);        
        callback(null,heroe);        
    } else {
        // error, siempre el primer argumento es un error
        // callback(heroe);        
        callback(`no existe el heroe con el id ${id}`);        
    }





}


