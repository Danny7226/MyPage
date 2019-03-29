var path = require('path');
var webpack = require('webpack');

 module.exports = {
     entry: './js/script.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'script.bundle.js'
     },
     module: {
         rules: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 exclude:/node_modules/,


             }
         ]
     },
     stats: {
         colors: true
     },

 };