
import '../css/componentes.css';


export const saludar = (nombre)=>{
    console.log('Creando etiqueta h1 sapo');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola de nuevo ${nombre} que tal`;
    document.body.append(h1);
}

