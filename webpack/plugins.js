const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (devMode) => {
  const plugins = [
    new HtmlWebpackPlugin({
      title: 'Webpack configuration',
    })
  ];

  if (!devMode) { // for production only
    plugins.push(new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }));
  }

  return plugins;
}