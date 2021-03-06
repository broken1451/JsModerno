
import './styles.css';
import { obtenerHeroesArr, obtenerHeroeAwait, heroesForAwait, heroesIfAwait } from './js/await';
// import { promesaLenta, promesaRapida, promesaMedia } from './js/promesas';
// {}

// import { buscarHeroe as buscarHeroeCallback } from './js/callbacks'; //con alias solo funciona en este archivo
// import { buscarHeroe, buscarHeroeAsync } from './js/promesas';
// import { heroes } from './js/promesas';


// const heroeId1 = 'thor'; 
// const heroeId2 = 'Iroman'; 

// // callbacks
// // // callback es una funcion enviada como argumento
// // buscarHeroe(heroeId1, (err,heroe) => {
// //     console.log('Callback llamado');

// //     if (err) {
// //         console.error('Callback error ocurrio algo mal ',err );
// //     } else {
// //         console.info('heroe: ', heroe);
// //     }
// //     // if (err) {
// //     //    return console.error(err );
// //     // //    return console.error('Callback error ocurrio algo mal ',err );
// //     // } 

// //         buscarHeroe(heroeId2, (err,heroe1)=>{

// //             if (err) {
// //                 console.error('Callback error ocurrio algo mal ',err );
// //             } else {
// //                 console.info('heroe: ', heroe1);
// //             }
// //             // if (err) {
// //             //    return console.error(err );
// //             // //    return console.error('Callback error ocurrio algo mal ',err );
// //             // } 
// //             console.error(`envidando a heroe ${heroe.nombre} y heroe1 ${heroe1.nombre} a la mision ` );
// //         });

// // });


// // Promesas
// // buscarHeroe(heroeId1).then((heroe)=>{
// //     // console.log(`enviando a ${heroe.nombre} a la mision `)

// //     buscarHeroe(heroeId2).then((heroe2)=>{
// //         console.log(`enviando a ${heroe2.nombre} y ${heroe.nombre} a la mision `)
// //     })
// // })



    
// Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)]).then((heroes)=>{
//     console.log('heroes ',heroes);
//     console.log(`enviando a ${heroes[0].nombre} y ${heroes[1].nombre} a la mision `)
// }).catch((err)=>{
//     alert(err);
//  }).finally(()=>{
//     console.log('Se acabo el promise all con el finally ');
//  });

// // Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)]).then((heroes)=>{
// //     console.log('heroes ',heroes);
// //     console.log(`enviando a ${heroes[0].nombre} y ${heroes[1].nombre} a la mision `)
// // });

// // // con destructuracion de arreglos
// Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)]).then(([heroeId1, heroeId2] = heroes )=>{
//     console.log('heroes ',heroes);
//     console.log(`enviando a ${heroeId1.nombre} y ${heroeId2.nombre} a la mision `)
// }).catch((err)=>{
//     alert(err);
// }).finally(()=>{
//     console.log('Se acabo el promise all con el finally ');
// });


// console.log(`fin programa`);
//////////////////////////////////////////////////

// Promise.race, nos permite a nosotros ejecutar las promesas en conjunto y obtener el mensaje de la promesa q se resuelva mas rapido
// Promise.race([promesaLenta,promesaMedia,promesaRapida]).then((mensaje)=>{
//     console.log(mensaje);
// }).catch((err)=>{
//     console.warn(err);
// });


// buscarHeroe(heroeId1).then((heroe)=>{
//     console.log(heroe);
// }).catch((err)=>{
//     console.warn(err);
// });

// buscarHeroeAsync(heroeId2).then((heroe)=>{
//     console.log(heroe);
// }).catch((err)=>{
//     console.warn(err);
// });


// await sin errores
// console.time('await');
// const heroes = obtenerHeroesArr().then((heroes)=>{
//     // console.log('con funcion buscarHeroeAsync')
//     console.log('con funcion buscarHeroe')
//     console.table(heroes)
//     console.timeEnd('await')
// });
// console.log(heroes);



// con errores await 
// console.time('await');
// const heroes = obtenerHeroeAwait('capi2').then((heroes)=>{
//     // console.log('con funcion buscarHeroeAsync')
//     console.log('con funcion buscarHeroe')
//     console.table(heroes)
//     console.timeEnd('await')
// }).catch(console.warn);
// console.log(heroes);

heroesForAwait()
heroesIfAwait('thor')