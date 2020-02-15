
function saludar() {
    console.log('Hola Mundo')
    return [1,2];
    // console.log(`Hola ${nombre}`) esto jamas se va a ejecutar despues de un return
}

function saludar1(nombre) {
    console.log(arguments)
    console.log(`Hola ${nombre}`)
}



const saludar2 = function () { // se conoce esto como funcion anonima, porq la function no tiene nombre 
    console.log('Hola Mundo')
}

const saludar3 = function (nombre) { // se conoce esto como funcion anonima, porq la function no tiene nombre 
    console.log(`Hola ${nombre}`)
}


// funciones de flecha o lambda function 

 const flecha = () => {
    console.log(`Hola Mundo`)
 }

 const flecha1 = (nombre) => {
    console.log(`Hola ${nombre}`)
 }





const retorno = saludar()
console.log(retorno[0],retorno[1]);

saludar1('Adrian',40,'chile')
saludar2()
saludar3('Adrian')
flecha()
flecha1('flecha')



// ejercicios



function sumar(a,b){
    return a +b
}

const sumar1 = (a,b) =>{
    return a +b
}


const sumar2 = (a,b) => a +b;




// comvertir esto a funcion de flecha sin llaves y con llaves
function aleatorio() {
    return Math.random()
}

const aleatorio1 = (a,b) =>{
    return Math.random();
}

const aleatorio2 = (a,b) => Math.random()

console.log(sumar(1,3))
console.log(sumar2(1,8))

console.log(sumar1(4,3))
console.log(aleatorio())
console.log(aleatorio1())
console.log(aleatorio2())











































