const webpack = require('webpack');
const { parsed: localEnv } = require('dotenv').config();
const withTypescript = require('@zeit/next-typescript');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const { env: prodEnv } = require('./now.json');

const imageMinPlugin = new ImageminPlugin({
  test: /\.(jpe?g|png|gif|svg)$/i,
});

const env = process.env.NODE_ENV === 'production' ? prodEnv : localEnv;
const envPlugin = new webpack.EnvironmentPlugin(env);

module.exports = withTypescript(
  withSass(
    withCSS({
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]',
      },
      webpack(config, options) {
        config.module.rules.push({
          test: /\.svg$/,
          loader: 'svg-inline-loader',
        });

        config.plugins.push(envPlugin);
        config.plugins.push(imageMinPlugin);

        // Do not run type checking twice:
        if (options.isServer)
          config.plugins.push(new ForkTsCheckerWebpackPlugin());

        return config;
      },
    }),
  ),
);
