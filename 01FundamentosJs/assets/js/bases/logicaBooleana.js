
const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}


const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}



console.warn('not o la negacion');// negacion
console.log(true)
console.log(!true)
console.log(!false)



console.log(!regresaFalse())



console.warn('and');// si todos los valores son true
console.log(true && true);
console.log(true &&  false);
console.log(true &&  !false);
console.log('4 condiciones con and', true && true && true && false);


console.log(regresaFalse() && regresaTrue())
console.log(regresaTrue() && regresaFalse())

                //  ejecuta esto si la primera es true
regresaTrue() && regresaFalse()


console.warn('OR');// por lo menos uno tiene q se true
console.log(true ||  false);
console.log(false || false);
console.log(regresaFalse() || regresaTrue())
console.log(regresaTrue() || regresaFalse())
console.log('4 condiciones con or', true || true || true || false);



console.warn('asignaciones');

const soyUndefined= undefined;
const soyNull = null;
const soyFalse = false;

const a1  =  false  && 'Hola mundo' && 145;
const a2  =  'Hola'  && ' mundo' && soyFalse;
const a3  =   soyFalse || 'ya no soy false';
const a4  =   soyFalse || soyUndefined || soyNull || 'ya no soy false' || true;
const a5  =   soyFalse || soyUndefined || regresaTrue() || 'ya no soy false' || true;
console.log(a1);// evalua y pone el ultimo valor 
console.log(a2);// evalua y pone el ultimo valor 
console.log(a3);// evalua y pone el ultimo valor 

console.table({a1,a2,a3,a4,a5});


if (true && true && true && false) {
    console.log('Regresa algo');
} else {
    console.log('Regresa algo mas');
}






