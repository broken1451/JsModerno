
import './styles.css';
import { buscarHeroe } from './js/callbacks';


const heroeId1 = 'thor'; 
const heroeId2 = 'iroman'; 

// callback es una funcion enviada como argumento
buscarHeroe(heroeId1, (err,heroe) => {
    console.log('Callback llamado');

    if (err) {
        console.error('Callback error ocurrio algo mal ',err );
    } else {
        console.info('heroe: ', heroe);
    }
    // if (err) {
    //    return console.error(err );
    // //    return console.error('Callback error ocurrio algo mal ',err );
    // } 

        buscarHeroe(heroeId2, (err,heroe1)=>{

            if (err) {
                console.error('Callback error ocurrio algo mal ',err );
            } else {
                console.info('heroe: ', heroe1);
            }
            // if (err) {
            //    return console.error(err );
            // //    return console.error('Callback error ocurrio algo mal ',err );
            // } 
            console.error(`envidando a heroe ${heroe.nombre} y heroe1 ${heroe1.nombre} a la mision ` );
        });



});

