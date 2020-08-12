const path = require('path');

const config = {
 entry: './src/index.js',
 output: {
   filename: 'main.js',
   path: path.resolve(__dirname, 'dist'),
},
 module: {
   rules: [
    {
       test: /\.(js)$/,
       exclude: /node_modules/,
       use: ['babel-loader']
    }
  ]
},
 resolve: {
   extensions: ['*', '.js']
}
};

module.exports = function (env, argv) {
   if (argv.mode === 'development') {
       // la siguiente configuración genera "mapas"
       // de código desde nuestro código fuente
       // al código generado por Webpack
       // permite depurar el código usando la misma fuente
       config.devtool = 'eval-source-map';
  }
}

module.exports = {
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    }
};