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
        // filename: '[name].[hash].js', // 'hash' will create same chunk hash
                                      // for every chunk and hence if code of any chunk changes
                                      // all cache will burst
        filename: '[name].[chunkhash].js', // This will create hash accroding to entry points
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
  ],

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