const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')
const babelLoader = {
  test: /\.m?js$/,
  exclude: /(node_modules)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
      '@babel/preset-env',
      "@babel/preset-react",
      "@emotion/babel-preset-css-prop"
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
  mode: 'development',
  entry: {
    index: ['./src/index.js']
  },
  output: {
    filename: '[name].[hash].js', // This will create hash accroding to entry points
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
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
      }),
      new webpack.HotModuleReplacementPlugin()
  ],

  resolve: {
    extensions: ['.js', '.json', '.css'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      images: path.resolve(__dirname, 'src/images'),
      service: path.resolve(__dirname, 'src/service'),
      src: path.resolve(__dirname, 'src/src'),
      styles: path.resolve(__dirname, 'src/styles'),
      helpers: path.resolve(__dirname, 'src/helpers'),
      src: path.resolve(__dirname, 'src')
    }
  },

  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 30000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  }
}