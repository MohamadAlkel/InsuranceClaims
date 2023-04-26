const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.config.common.js');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');

module.exports = merge(common, {
  output: {
    filename: '[name].js',
    chunkFilename: 'js/[name].[contenthash].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new BaseHrefWebpackPlugin({ baseHref: '/' }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'staging'),
    }),
  ],
});
