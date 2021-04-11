const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (tpyes, devMode) => {
  const ASSETS_MAP = {
    sass: {
      test: /\.(sa|sc|c)ss$/,
      use: [
        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
      ],
    },
    images: {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource'
    },
    fonts: {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource'
    },
    babel: {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-object-rest-spread'],
          cacheDirectory: true
        }
      }
    },
    ts: {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
  }

  return tpyes.reduce((acc, type) => {
    if (!ASSETS_MAP[type]) {
      return acc;
    }

    return [ ...acc, { ...ASSETS_MAP[type] }];
  }, [])
}