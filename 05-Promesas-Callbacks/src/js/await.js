import { buscarHeroeAsync, buscarHeroe,  } from "./promesas";



const heroeId = ['capi', 'iroman', 'thor'];
const heroesPromesas = heroeId.map((id)=>{ return buscarHeroe(id)});
// const heroesPromesas = heroeId.map(buscarHeroe);

// sin errores
//  export const obtenerHeroesArr = async () => {
//     let arrHeroes = [];

//     for (const id of heroeId) {
//         // buscarHeroeAsync(id).then((heroe)=>{
//         //     arrHeroes.push(heroe)
//         // });
//         // el await trabaja a juro con async
//         const heroe = await buscarHeroeAsync(id);
//         arrHeroes.push(heroe)
//     }

//     return arrHeroes;
//  };


// con fucnion buscarHeroe
//  export const obtenerHeroesArr = async () => {
//     let arrHeroes = [];
//     for (const id of heroeId) {
//         const heroe = buscarHeroe(id); // usar el await siempre fuera del un ciclo es recomendable
//         arrHeroes.push(heroe)
//     }
//     return await Promise.all(arrHeroes);
//  };



// mas elegante 
// export const obtenerHeroesArr = async () => {
//     // todo esto es lo mismo que 
//     //     let arrHeroes = [];
//     //     const heroe =  heroeId.map((heroeID)=>{
//     //         console.log(heroeID);
//     //        arrHeroes.push( buscarHeroe(heroeID));
//     //     });
//     //   return await Promise.all(arrHeroes)

//     //   esto:
//     return await Promise.all(heroeId.map( buscarHeroe));
// };


// con erroes
export const obtenerHeroeAwait = async (id) => {

    try {
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    } catch (error) {
        console.time('await');
        console.log('CATCH!!!!!!!!!!!!!!!')
        // console.log(error)
        console.timeEnd('await')
        // throw error;
        throw {
            nombre: 'Sin nombre',
            poder: 'sin poder'
        };
    }

};


// if and for await
export const heroesForAwait = async () => {
    console.time('await');
    // const heroe = await Promise.all(heroesPromesas)
    // heroe.forEach(heroe=>{
    //     console.log(heroe);
    // })
    console.log(heroesPromesas)
    // console.log(heroe)


    for await (const heroe of heroesPromesas) {
        console.log(heroe)
    }

    console.timeEnd('await')
};

export const heroesIfAwait = async (id) => {
    if ( (await buscarHeroeAsync(id)).nombre== 'Thor' ) {
        console.log('se te extrana tony')
    }else {
        console.log('nahhhh ')
    }
}