const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    './src/index.jsx',
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist'),
    publicPath: '',
  },
  devServer: {
    hot: true,
    host: 'localhost',
    port: 8080,
    contentBase: './dist/',
  },
  resolve: {
    root: path.join(__dirname, '../src'),
    modulesDirectories: ['node_modules', 'src', 'src/node_modules'],
    extensions: ['', '.js', '.jsx', '.scss'],
    alias: {
      react: path.resolve('node_modules/react'),
    },
  },
  module: {
    loaders: [
      {
        test: /src\/.*\.jsx?$/,
        loaders: [
          'babel?presets[]=react,presets[]=es2015',
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'autoprefixer?browsers=last 3 versions',
          'sass?outputStyle=expanded',
        ],
      },
      {
        test: /assets\/.*\.(jpe?g|png|gif|svg|ttf|eot|svg|woff|woff2)?$/,
        loaders: [
          'file?name=[path][name].[ext]?[hash:6]&context=./src',
        ],
      },
      {
        test: /node_modules\/font-awesome\/.*\.(jpe?g|png|gif|svg|ttf|eot|svg|woff|woff2)(\?\S*)?$/,
        loaders: [
          'file?name=assets/font-awesome/[name].[ext]?[hash:6]',
        ],
      },
      {
        test: /\.json5$/,
        loader: 'json5',
      },
      {
        test: /src\/node_modules\/xod-espruino\/index\.js$/,
        loader: 'null',
      },
    ],
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([
      { from: 'src/index.html' },
    ]),
  ],
};