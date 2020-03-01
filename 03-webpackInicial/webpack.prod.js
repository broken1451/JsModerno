
// npm i -D html-loader html-webpack-plugin esto me permite  mover el archivo html la dist y decirle a webpack q meta automaticamente el bundle en el index 
// npm i -D webpack-dev-server servidor de desarrollo de webpack  para el live reload
// webpack-dev-server estara pendiente de los cambios con este comando  "start": "webpack-dev-server --open", en el packge.json
// package.json 
// "start": "webpack-dev-server --open --port=8080", por defecto


// npm i -D css-loader(nos permite leer el archivo y a su vez inyectarlo y minimizarlo para colocarlo en el bundle) style-loader(entre los dos hacen ese trabajo)

// npm i -D mini-css-extract-plugin para poner el archivo global de css en el en un archivo separado

// npm i -D optimize-css-assets-webpack-plugin para minificar el archivo global del css

// npm i -D file-loader

// para limpiar la carpeta dist automaticamente al hacer el build npm install --save-dev clean-webpack-plugin

/*
packge.json
"build": "webpack", archivo por defecto
"build": "webpack --config webpack.prod.js",
 "build:dev": "webpack --config webpack.config.js",
"build": "webpack --config.prod.js",

*/


/*
Instalacion de babel js
npm install --save-dev babel-loader @babel/core
babel trabaja solo js asi q afectara solo a archivis js

se crea un archivo para su configuracion .babelrc

npm install babel-preset-minify --save-dev para minificar el archivojs 
se pone esta configuracio en el archivo .babelrc
{
  "presets": ["minify"]
}

se instala para q babel minificar todo el codigo js compatibles 
npm install babel-minify-webpack-plugin --save-dev

se instala para usar el standar js de todo los navegadores
npm install --save-dev @babel/preset-env
configuracion en el .babel 
{
  "presets": ["@babel/preset-env"]
}

.babel
{
    "presets": ["@babel/preset-env","minify"]
}


*/



// configuracion de webpack
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const MinifyPlugin = require("babel-minify-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

   //  mode: 'production', // lo minifica
    mode: 'production',
    // para minificar el archivo global con el plugin optimizeCssAssetsWebpackPlugin
    optimization:{
      minimizer:[
        new optimizeCssAssetsWebpackPlugin()
      ]
    },
    output:{
      //  crear el archivo semimanual
      // filename:'nombre q quiera, main.abc.js'
      // filename:'main.[hash, contentHash].js'
      filename:'main.[contentHash].js'
    },
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
           },
           {
            // aplica esta regla si es un archivo css
            test:/\.css$/,
            exclude: /styles\.css$/, // excluye este archivo
            use:[
               'style-loader',
               'css-loader'

            ]
           },
           {
            test:/styles\.css$/,// solo evalua este archivo, aplica esto solo con este archivo
            use:[
                miniCssExtractPlugin.loader,
               'css-loader'

            ]
           },
           {
            // para evaluar cualquier imagen
            test: /\.(png|svg|jpg|gif)$/,
             use: [{
               loader: 'file-loader',
               // para evitar problemas a la hora de importar modulos
               options:{
                  esModule:false,
                  // name:'ruta a a donde mover/[mismo nombre del archivo].[extension]'
                  name:'assets/img/[name].[ext]'
               }
             }]  
           },
           {
             // configuracion de babel js
             test: /\.js$/,
             exclude: /node_modules/, 
              use:[
                'babel-loader'
              ]
           } 
        ]
     },
     plugins: [
         new htmlWebpackPlugin({
            //  template: le dice a webpack que archivo quiero tomar './src/index.html'
            template: './src/index.html',
            // filename: hacia donde quiero colocarlo './index.html'
            filename: './index.html'
         }),
         new miniCssExtractPlugin({
            // filename: '[nombre de desee poner al archivo].[contentHash, nombre especial para prevenir el cache].css'
            filename: '[name].[contentHash].css',
            ignoreOrder: false // esto es para q no salgan los warning 
         }),
         new MinifyPlugin(),
         new CleanWebpackPlugin()
     ]




}






















