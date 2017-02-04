const path = require('path');

module.exports = {
  entry: {
    app: './src/client',
  },
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: 'babel-loader',
      },
    ],
  },
};
