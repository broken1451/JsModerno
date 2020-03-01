import {saludar} from './js/componentes'
import './styles.css'

const nombre = 'Adrian'

saludar(nombre);

// instalacion de webpack npm install webpack webpack-cli --save-dev
// npm run build,ejecuta webpack pordefecto y crea el main.js automatico, bundle
// package.json  "build": "webpack",

// npm i -D html-loader html-webpack-plugin esto me permite  mover el archivo html la dist y decirle a webpack q meta automaticamente el bundle en el index 
 