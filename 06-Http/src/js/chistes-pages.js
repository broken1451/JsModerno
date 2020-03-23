import { obtenerChistes } from "./services";

const body = document.body;
let btn,olChistes;

const crearChisteHtml = () => {
    const html = `
    <h1 class="mt-5">Chistes</h1>
    <hr>
    <button class="btn btn-primary">Otro chiste</button>
    <ul class="mt-2 list-group">
    </ul>
    `

    const divChiste = document.createElement('div');
    divChiste.innerHTML = html;

    body.append(divChiste);

}

const eventos = () => {
    olChistes = document.querySelector('ul');
    btn = document.querySelector('button');
    btn.addEventListener('click', async ()=>{
      btn.disabled = true;
      const chiste =   await obtenerChistes();
      dibujarChiste(chiste)
      btn.disabled = false;
    });
}


// espero un chiste los valoes id y el value
const dibujarChiste = (chiste) => {
    // const olListItem = document.createElement('li');
    // olListItem.innerHTML = `<b>${chiste.id} </b>: ${chiste.value}`;
    // olListItem.classList.add('list-group-item');
    // olChistes.append(olListItem);   
    const olListItem = document.createElement('li');
    olListItem.innerHTML = `<b>${chiste.id} </b>: ${chiste.value}`;
    olListItem.classList.add('list-group-item');
    olChistes.append(olListItem);
    let arr = []
    arr.push(olChistes)
}



export const init = () => {
    crearChisteHtml();
    eventos();
}