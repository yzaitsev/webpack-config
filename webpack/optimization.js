const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = () => {
  const MAP_OPTIMIZATION = {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  }


  return MAP_OPTIMIZATION;
}