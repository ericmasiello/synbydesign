var pkg = require('./package.json');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');
var Clean = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var DESIGN_ASSETS = path.resolve(ROOT_PATH, 'node_modules/synbydesign.design')

process.env.BABEL_ENV = TARGET;

var common = {
  entry: APP_PATH,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: APP_PATH
      },
      {
        test: /\.(png|jpg|svg$)$/,
        loader: 'url?limit=25000',
        include: [APP_PATH, DESIGN_ASSETS]
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Syn By Design - Eric Masiello\'s Portfolio',
      googleAnalyticsCode: 'UA-162757-4',
      template: 'app/index.tpl.html',
      hash: true,
      minify: {
        removeComments: true,
        removeCommentsFromCDATA: true,
        collapseWhitespace: true,
        removeEmptyAttributes: true
      }
    }),
    new ExtractTextPlugin('[name].[chunkhash].css')
  ]
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      proxy: [
        {
          "path": "/wp/wp-json*",
          "target": "http://localhost/synbydesign"
        }
      ]
    },
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: 'style!css!autoprefixer-loader?browsers=last 2 versions!sass',
          include: [APP_PATH, DESIGN_ASSETS]
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ]
  });
}

if (TARGET === 'build'){
  module.exports = merge(common, {
    entry: {
      app: APP_PATH,
      vendor: Object.keys(pkg.dependencies)
    },
    /* important */
    ouptput: {
      path: BUILD_PATH,
      filename: '[name].[chunkhash].js?'
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?browsers=last 2 versions!sass-loader'),
          include: [APP_PATH, DESIGN_ASSETS]
        }
      ]
    },
    plugins: [
      new Clean(['build']),
      /* important */
      new webpack.optimize.CommonsChunkPlugin(
        'vendor',
        '[name].[chunkhash].js'
      ),
      new webpack.DefinePlugin({
        'process.env': {
          //this affects react lib size
          'NODE_ENV': JSON.stringify('production') //weird hack
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  });
}