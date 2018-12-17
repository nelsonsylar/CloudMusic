const path = require('path');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
 
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }  
      },
      {
        test: /\.(jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
      }
      },
      {
        test: /\.(png)$/,//这里为了区分只写png
        loader: 'url-loader',
        options: {
            name: './images/[name].[ext]',
            limit: 18192
        }
    },

      {
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader',
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },    
    ]
  }
};