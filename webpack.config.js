var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/app/client'
  ],
  output: { 
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
    //react-hot is like browser sync and babel loads jsx and es6-7
    {test: /\.js$/, loaders: ['react-hot', 'babel'], include: path.join(__dirname, 'src')},
    { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
    ]
  }
};
