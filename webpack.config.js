const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const babelLoader = {
  test: /\.m?js$/,
  exclude: /(node_modules)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
      '@babel/preset-env',
      '@babel/preset-react'
    ]
    }
  }
}

// const fileLoader = {
//   test: /\.(png|svg|jpg|gif)$/,
//   use: [{
//       loader: require.resolve('file-loader'),
//       options:{ name: '[name].[ext]' },
//   }]
// }

const cssLoader = {
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader',
    ],
}

const urlLoader = {
  test: /\.(png|svg|jpg|gif)$/i,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 1024,
        name: '[name].[ext]',
      },
    },
  ],
}
module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
          oneOf: [babelLoader, cssLoader, urlLoader],
          }]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
      title: 'Home',
      template: './src/index.html'
    })
  ]
}