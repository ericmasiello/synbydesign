const path = require('path');
const merge = require('webpack-merge');

const PATHS = {
  src: path.join(__dirname, 'src'),
};

module.exports = {
  PATHS,
  config: merge({
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.json', '.ts', '.tsx'],
    },
    // Tell webpack to run babel on every file it runs through
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          enforce: 'pre',
          loader: 'tslint-loader',
        },
        {
          test: /\.(gif|png|jpe?g)$/i,
          include: [PATHS.src],
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
            },
          ],
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader',
        },
      ],
    },
  }),
};
