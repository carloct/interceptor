const { resolve } = require('path')
const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const { GenerateSW } = require('workbox-webpack-plugin')
const merge = require('webpack-merge')

const base = require('./webpack.config.base')

const config = {
  entry: resolve('src', 'index.tsx'),
  mode: 'production',
  output: {
    path: resolve('dist'),
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[name].[contenthash].[id].chunk.js'
  },
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin(),
    new ManifestPlugin(),
    new GenerateSW(),
  ],
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    minimize: true,
    splitChunks: {
      minSize: 100000,
      maxSize: 1500000,
      cacheGroups: {
        vendor: {
          test: '/node_modules/',
          chunks: 'all',
          enforce: true
        }
      }
    }
  }
}

module.exports = merge(base, config);
