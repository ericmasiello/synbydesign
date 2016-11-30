/* eslint-disable comma-dangle */
const path = require('path');
/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
/* eslint-enable import/no-extraneous-dependencies */
const parts = require('./webpack/parts');

const TARGET = process.env.npm_lifecycle_event || 'dev';
const PATHS = {
  build: path.join(__dirname, 'build/'),
  app: path.join(__dirname, 'app'),
  design: path.join(__dirname, 'node_modules/synbydesign.design')
};

const common = merge(
  {
    entry: {
      app: PATHS.app
    },
    output: {
      path: PATHS.build,
      filename: '[name].js'
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    plugins: [
      new HtmlWebpackPlugin({
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
      })
    ],
    externals: {
      cheerio: 'window',
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    },
  },
  parts.setupBabel([PATHS.app]),
  parts.setupCSS([PATHS.design, PATHS.app]),
  parts.setupImages([PATHS.design, PATHS.app])
);

let config;

switch (TARGET) {
  case 'build':
    config = merge(
      common,
      parts.setupSourceMaps('build'),
      parts.configureEnvironment('production')
    );
    break;
  default:
    config = merge(
      common,
      parts.setupSourceMaps(),
      // parts.setupESLint([PATHS.app]),
      parts.devServer(PATHS.build, {
        proxy: [
          {
            path: '/wp/wp-json*',
            target: 'http://localhost/synbydesign'
          }
        ]
      }),
      parts.configureEnvironment('development')
    );
}

module.exports = validate(config);
