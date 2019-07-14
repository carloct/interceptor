const path = require('path')
const merge = require('webpack-merge')

const BaseWebpackConfig = require('./webpack.config.base')

module.exports = merge(BaseWebpackConfig, {

  entry: {
    app: [
      './src/index',
    ],
  },
  mode: 'development',

  output: {
    path: path.resolve(__dirname, 'dist/dev'),
    filename: '[name].[hash:10].js',
    chunkFilename: '[name].[hash:10].js'
  },

  devServer: {
    port: process.env.PORT_WEBPACK_DEV_SERVER || 4000,
    proxy: {
      '/api': {
        target: `http://localhost:${process.env.PORT || 3001}`,
        secure: false,
      },
    },

    open: false,
    historyApiFallback: true
  },

  devtool: 'eval-source-map'
});
