
import './styles.css';
import { buscarHeroe } from './js/callbacks';

const heroeId = 'iroman'; 

// callback es una funcion enviada como argumento
buscarHeroe(heroeId, (err,heroe) => {
    console.log('Callback llamado');

    if (err) {
        console.error('Callback error ocurrio algo mal ',err );
    } else {
        console.info('heroe: ', heroe);
    }

});

