const path = require('path');

module.exports = {
  entry: {
    admin:'./src/js/admin/app.js',
    app:'./src/js/app/index.js'
  },
 
  output: {
    path: __dirname + "/dist/",
    filename: 'js/[name].js',
    publicPath: '/',
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
        test: /\.(jpg|gif|svg|png)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
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