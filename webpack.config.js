const path = require('path');

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/client'],
  },
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: '[name].js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]',
        ],
      },
    ],
  },
};
