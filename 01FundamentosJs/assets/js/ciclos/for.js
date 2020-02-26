
const heroes = ['Batman','Superman','Mujer Maravilla','Acuaman'];
console.log(heroes);

console.warn('Ciclo for tradicional')
for (let i = 0; i < heroes.length; i++) {
    const element = heroes[i];
    console.log(element);
}

for (let i = 0; i <= heroes.length - 1; i++) {
    const element = heroes[i];
    console.log(element);
}


console.warn('Ciclo for in');
for (let i in heroes) {
    console.log(heroes[i]);
}


console.warn('Ciclo for of');
for (const i of heroes) {
    console.log(i);
}

// modo singular
let arrHeroe=[];
for (const heroe of heroes) {
    arrHeroe.push(heroe);
    console.log(heroe);
    console.table({arrHeroe});
    // return arrHeroe;
}




