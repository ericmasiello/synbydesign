const path = require('path');

const config = {
  entry: './app/index.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'bin'),
    filename: 'www.js',
  },
  // node: {
  //   console: true,
  //   global: true,
  //   process: true,
  //   Buffer: true,
  //   __filename: "mock",
  //   __dirname: "mock",
  //   setImmediate: true
  // },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        // "test" is commonly used to match the file extension
        test: /\.js$/,

        // "include" is commonly used to match the directories
        include: [
          path.resolve(__dirname, 'app'),
          path.resolve(__dirname, 'bin'),
        ],

        // "exclude" should be used to exclude exceptions
        // try to prefer "include" when possible
        // exclude: [
        //   path.resolve(__dirname, 'node_modules'),
        // ],

        // the "loader"
        loader: 'babel-loader', // or "babel" because webpack adds the '-loader' automatically
      },
    ],
  },
};

module.exports = config;
