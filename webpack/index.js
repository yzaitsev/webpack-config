const path = require('path');

const getPlugins = require('./plugins');
const getLoaders = require('./loaders');
const getOptimization = require('./optimization');

// ===== ENVIROMENT
const devMode = process.env.NODE_ENV !== 'production';
const rootDir = process.cwd();

module.exports = {
  mode: 'development',
  entry: `${rootDir}/src/index.tsx`,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: `${rootDir}/build`,
    hot: true
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(rootDir, 'build'),
    clean: true
  },
  optimization: getOptimization(),
  plugins: [ ...getPlugins() ],
  module: {
    rules: getLoaders(['sass', 'images', 'fonts', 'babel', 'ts'], devMode),
  },
  resolve: {
    modules: [rootDir, 'node_modules'],
    extensions: ['.tsx', '.ts', '.js'],
  }
};