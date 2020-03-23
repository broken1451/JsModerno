import { subirImagen } from "./services";

const body = document.body;
let inputFile, imgFoto;



const crearInputFileHtml = () => {

    const html = `
    <h1 class="mt-5">Subir archivos</h1>
    <hr>
    <label for="">Selecciona una fotografia</label>
    <input type="file" accept="image/png, image/jpeg"/>
    <br/>
    <img src="" class="img-thumbnail" id="foto">
    `

    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);

    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#foto');

}


const eventos = () =>{
    inputFile.addEventListener('change', (event) => {
        const file = event.target.files[0];
        subirImagen(file).then((imgSubir)=>{
            imgFoto.src = imgSubir.secure_url;
            console.log(imgSubir);
        });
        // console.log(file);
    });
}


export const init = () =>{
    crearInputFileHtml();
    eventos();
}
