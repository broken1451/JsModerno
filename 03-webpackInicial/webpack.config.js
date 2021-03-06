
// npm i -D html-loader html-webpack-plugin esto me permite  mover el archivo html la dist y decirle a webpack q meta automaticamente el bundle en el index 
// npm i -D webpack-dev-server servidor de desarrollo de webpack  para el live reload
// webpack-dev-server estara pendiente de los cambios con este comando  "start": "webpack-dev-server --open", en el packge.json
// package.json 
// "start": "webpack-dev-server --open --port=8080", por defecto


// npm i -D css-loader(nos permite leer el archivo y a su vez inyectarlo y minimizarlo para colocarlo en el bundle) style-loader(entre los dos hacen ese trabajo)

// npm i -D mini-css-extract-plugin para poner el archivo global de css en el en un archivo separado

// npm i -D optimize-css-assets-webpack-plugin para minificar el archivo global del css

// npm i -D file-loader

// configuracion de webpack
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {

   //  mode: 'production', // lo minifica
    mode: 'development',
    // para minificar el archivo global con el plugin optimizeCssAssetsWebpackPlugin
    optimization:{
      minimizer:[
        new optimizeCssAssetsWebpackPlugin()
      ]
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
            filename: '[name].css',
            ignoreOrder: false // esto es para q no salgan los warning 
         })
     ]









}






















