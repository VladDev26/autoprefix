var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');


var production = new webpack.DefinePlugin({
  'process.env': { NODE_ENV: JSON.stringify('production') }
});


module.exports = {
  entry: path.resolve(__dirname + '/src/script'),
  output: {
    path: 'dist',
    filename: '[name].js',
    publicPath: '/dist/'
  },

  module: {
    loaders: [
      { 
        test: /\.scss$/i,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader', //autoprefixer
          'sass-loader'
        ],
      },
    ],
    plugins: [
      // production,
      // new webpack.optimize.UglifyJsPlugin()
    ]
  },
  // postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
  postcss: [ autoprefixer({ browsers: ['>0.001%'] }) ]
};





