const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Inform webpack that we're building a bundle
  // for nodeJS, rather than for the browser
  target: 'node',

  // Tell webpack the root file of our
  // server application
  entry: './src/index.ts',

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  externals: [
    webpackNodeExternals({
      whitelist: [/^lodash/],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [base.PATHS.src],
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.json',
          },
        },
      },
    ],
  },
};

module.exports = merge(base.config, config);
