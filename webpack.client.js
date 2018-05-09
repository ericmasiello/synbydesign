const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const indexPage = new HtmlWebpackPlugin({
  template: `!!raw-loader!${path.join(
    process.cwd(),
    'src/index.template.ejs',
  )}`,
  filename: path.resolve(__dirname, 'views/index.ejs'),
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
  },
});

const errorPage = new HtmlWebpackPlugin({
  template: `!!raw-loader!${path.join(
    process.cwd(),
    'src/error.template.ejs',
  )}`,
  filename: path.resolve(__dirname, 'views/error.ejs'),
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
  },
});

// const serviceWorker = new ServiceWorkerWebpackPlugin({
//   entry: path.join(__dirname, 'src/client/sw.ts'),
// });

const copyWebpackPlugin = new CopyWebpackPlugin([
  {
    from: 'src/client/images',
    to: '',
  },
]);

const imageMinPlugin = new ImageminPlugin({
  test: /\.(jpe?g|png|gif|svg)$/i,
});

const config = {
  // Tell webpack the root file of our
  // server application
  entry: {
    bundle: './src/client/client.tsx',
  },

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },

  plugins: [
    indexPage,
    errorPage,
    // serviceWorker,
    copyWebpackPlugin,
    imageMinPlugin,
  ],
};

// const extractBundles = bundles => ({
//   plugins: bundles.map(
//     bundle => new webpack.optimize.CommonsChunkPlugin(bundle),
//   ),
// });

module.exports = merge(
  baseConfig,
  config,
  // extractBundles([
  //   {
  //     name: 'vendor',
  //     minChunks: ({ resource }) =>
  //       resource &&
  //       resource.indexOf('node_modules') >= 0 &&
  //       resource.match(/\.js$/),
  //   },
  // ]),
);
