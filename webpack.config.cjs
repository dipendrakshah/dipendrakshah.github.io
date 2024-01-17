const path = require('path');
//import path from 'path';

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
      modules: [
        'node_modules',
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'src/components'),
      ],
    },
    output: {
      path: __dirname + '/public',
      publicPath: '/',
      filename: 'bundle.js',
    },
  };