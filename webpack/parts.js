/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
/* eslint-enable import/no-extraneous-dependencies */

exports.setupSourceMaps = (type = 'dev') => {
  switch (type) {
    case 'build':
      return {
        devtool: 'source-map'
      };
    default:
      return {
        devtool: 'eval-source-map'
      };
  }
};

exports.configureEnvironment = env => ({
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env) // weird hack
      }
    })
  ]
});

exports.devServer = (path, customDevServerConfig) => ({
  devServer: Object.assign({}, {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT,
    outputPath: path
  }, customDevServerConfig),
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    })
  ]
});

exports.setupESLint = paths => ({
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        include: paths
      }
    ]
  }
});

exports.setupBabel = paths => ({
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          cacheDirectory: true
        },
        include: paths
      }
    ]
  }
});

exports.setupIcons = paths => ({
  module: {
    loaders: [
      {
        test: /\.svg$/,
        loaders: ['svg-inline'],
        include: paths
      }
    ]
  }
});

exports.setupImages = paths => ({
  module: {
    loaders: [
      {
        test: /\.(png|jpg|svg$)$/,
        loader: 'url?limit=25000',
        include: paths
      }
    ]
  }
});

exports.setupCSS = paths => ({
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: paths
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass'],
        include: paths
      }
    ]
  },
  postcss: () => [autoprefixer({
    browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'safari >= 4']
  })]
});
