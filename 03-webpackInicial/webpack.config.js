
// npm i -D html-loader html-webpack-plugin esto me permite  mover el archivo html la dist y decirle a webpack q meta automaticamente el bundle en el index 
// npm i -D webpack-dev-server servidor de desarrollo de webpack  para el live reload
// webpack-dev-server estara pendiente de los cambios con este comando  "start": "webpack-dev-server --open", en el packge.json
// package.json 
// "start": "webpack-dev-server --open --port=8080", por defecto

// configuracion de webpack
const htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {

    mode: 'development',
    //configuracion del webpack
     module:{
        // reglas
        rules:[
           {
            // test: condicion que tiene que hacer webpack al evaluar archivo por archivo
            // aplica esta regla si es un archivo html
            test:/\.html$/,
             use:[{
                loader:'html-loader',// para mover el index a la carpeta dist
                options:{minimize:false},// minimizar el html
             }]
           } 
        ]
     },
     plugins: [
         new htmlWebpackPlugin({
            //  template: le dice a webpack que archivo quiero tomar './src/index.html'
            template: './src/index.html',
            // filename: hacia donde quiero colocarlo './index.html'
            filename: './index.html'
         })
     ]









}






















