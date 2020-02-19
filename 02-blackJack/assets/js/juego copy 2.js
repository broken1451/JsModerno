
/*
// 2C = Two of clubs (Treboles)
// 2D = Two of Dimonds (Diamantes)
// 2C = Two of Hearts (Corazones)
// 2C = Two of Spades (Espada)
*/

// funcion anonima
(()=>{

    'use strict'




    let deck  = [];
    let tipos = ['C','D','H','S']
    let tiposEspeciales = ['A','J','Q','K']
    let puntosJugador= 0;
    let puntosComputadora=0;
    let divCartasJugardor = document.querySelector('#jugador-cartas');
    let divCartasComputadora = document.querySelector('#computadora-cartas');


    // Referencias hacia el HTML
    let botonPedir =  document.querySelector('#pedir');
    let botonDetener =  document.querySelector('#detener');
    let botonNuevo =  document.querySelector('#nuevo');
    let smalls =  document.querySelectorAll('small');


    // esta funcion crea un nuevo deck
    const crearDeck = ()=>{

        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                // console.log(tipo);
                deck.push(i + tipo);
            }
        }

        for (let tipo of tipos) {
            for (let tiposEspecial of tiposEspeciales) {
                deck.push(tiposEspecial + tipo);
            }
        }

    //  console.log(deck);
    deck = _.shuffle(deck); // libreria underscore poner aleatoriamento un arreglo
    console.log(deck);
    return deck;
    }



    crearDeck();


    // Esta funcion permite/pedir/tomar una carta
    const pedirCarta = ()=>{

        if (deck.length === 0) {
            throw 'No hay cartas en el deck'
        }

        const carta = deck.pop();
        console.log(deck);

        // console.log(carta); // debe de ser de la baraja, y dejar de existir en el deck
        // return '2C'
        return carta;
    }

    // pedirCarta();


    // Esta funcion dice el valor
    const valorCarta = (carta) =>{

        const valor = carta.substring(0,carta.length-1);
        let puntos = 0;
        // console.log({valor});
        console.log(carta);

        return (isNaN(valor))?
                (valor === 'A')? 11: 10:
                Number(valor);


        // if (isNaN(valor)) {
        //     // no es un numero
        //     puntos = (valor === 'A')? 11: 10;
        //     console.log('No es un numero');
        // } else {
        //     // es un numero
        //     // puntos = valor *1;
        //     puntos = Number(valor);
        //     console.log('Es un numero');
        // }
        // console.log(puntos);

    }


    const valor = valorCarta(pedirCarta());
    console.log({valor});


    // turno de la computadora
    const turnoComputadora = (puntosMinimo)=>{


        do {
            
            const carta =  pedirCarta();
            puntosComputadora = puntosComputadora + valorCarta(carta);
            smalls[1].innerHTML = puntosComputadora
            
        
            // <img class="carta" src="assets/cartas/10C.png" alt="">
            // creando carta
            const imgCartaComputadora = document.createElement('img');
            imgCartaComputadora.src=`assets/cartas/${carta}.png`
            imgCartaComputadora.classList.add('carta');
            divCartasComputadora.append(imgCartaComputadora);

            if (puntosMinimo > 21) {
            break;     
            }

        } while ( (puntosComputadora < puntosMinimo) &&  (puntosMinimo <=21));
    
        setTimeout(() => {
            if (puntosMinimo > 21) {
                alert('Gano la computadora');    
            } else if (puntosComputadora === puntosMinimo) {
                alert('Nadie gana');          
            } else if (puntosComputadora > 21) {
                alert('Gano el jugador');  
            } else {
                alert('Gano la computadora');    
            }
        }, 10);
    }




    // Eventos
    botonPedir.addEventListener('click',  () => { 
        const carta =  pedirCarta();
        puntosJugador = puntosJugador + valorCarta(carta);
        smalls[0].innerHTML = puntosJugador
        

        // <img class="carta" src="assets/cartas/10C.png" alt="">
        // creando carta
        const imgCartaJugardor = document.createElement('img');
        imgCartaJugardor.src=`assets/cartas/${carta}.png`
        imgCartaJugardor.classList.add('carta');
        divCartasJugardor.append(imgCartaJugardor); //classList.add('form-control') add a nueva clase desde js a un elemento html 
        
        if (puntosJugador > 21) {
            console.warn('Perdiste');
            turnoComputadora(puntosJugador)
            botonPedir.disabled = true;
            botonDetener.disabled = true;  
        } else if (puntosJugador === 21) {
            turnoComputadora(puntosJugador)
            botonPedir.disabled = true;
            botonDetener.disabled = true;
            alert('Ganaste')
            console.warn('21, Ganaste');
        }
        
        console.log('click');
        console.log('carta ', carta);
        console.log('puntosJugador ', puntosJugador);
    });

    botonDetener.addEventListener('click', ()=>{
        botonPedir.disabled = true;
        botonDetener.disabled = true;
        turnoComputadora(puntosJugador);
    });


    botonNuevo.addEventListener('click', ()=>{
    
        smalls[0].innerHTML = 0;
        smalls[1].innerHTML = 0;

        deck = [];
        deck = crearDeck();
        puntosComputadora = 0;
        puntosJugador = 0;
        // innerHtml  borrar y meter cualquier cosas en el html dinamicamente 
        divCartasJugardor.innerHTML = '';
        divCartasComputadora.innerHTML = '';

        
        botonPedir.disabled = false;
        botonDetener.disabled = false;
    });




})()



// 1 resetear el deck, borrar las cartas, resetear los puntajes y habilitar los botones















