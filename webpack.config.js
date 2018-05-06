const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  resolve: {
    extensions: [
      '.js', '.jsx', '.ts', '.tsx', '.css'
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'awesome-typescript-loader',
          'tslint-loader'
        ]
      },
      {
        test: /bootstrap.*\.css$/,
        include: [path.join(__dirname, 'node_modules', 'bootstrap')],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.css$/,
        include: [path.join(__dirname, 'src')],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            `css-loader?modules${process.env.NODE_ENV === 'production' ? '&minimize' : ''}`,
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    ...(process.env.NODE_ENV === 'production' ? [new webpack.optimize.AggressiveMergingPlugin()] : []),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    })
  ],
  optimization: {
    minimizer: [
      ...(process.env.NODE_ENV === 'production' ? [new UglifyJsPlugin()] : [])
    ]
  },
  devServer: {
    contentBase: '.',
    publicPath: '/dist/',
    inline: true
  }
};
