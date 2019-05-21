const webpack = require('webpack');
const { parsed: localEnv } = require('dotenv').config();
const withTypescript = require('@zeit/next-typescript');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const withCSS = require('@zeit/next-css');
const { env: prodEnv } = require('./now.json');

const env = process.env.NODE_ENV === 'production' ? prodEnv : localEnv;

module.exports = withTypescript(
  withCSS({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]',
    },
    webpack(config, options) {
      config.plugins.push(new webpack.EnvironmentPlugin(env));

      // Do not run type checking twice:
      if (options.isServer)
        config.plugins.push(new ForkTsCheckerWebpackPlugin());

      return config;
    },
  }),
);
