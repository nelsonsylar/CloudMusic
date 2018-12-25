const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: {
    admin:'./src/js/admin/admin.js',
    index:'./src/js/index/index.js',
    app:'./src/js/app/app.js'
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
        test: /\.css$/,
        use:ExtractTextPlugin.extract({
            fallback:"style-loader",
            use:"css-loader"
        })
      },
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
        test: /\.(jpe?g|gif|svg|png)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        }
      },
      {
        test: /\.(jpg|gif|svg|png)$/,
        loader: 'url-loader',
        options: {
            name: './images/[name].[ext]',
            limit: 18192
        }
      },
      {
        test: /\.scss$/,
        use:ExtractTextPlugin.extract({
            fallback:"style-loader",
            use:[{
                loader:"css-loader"
            },{
                loader:"sass-loader"
            }]
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css')
  ]
};