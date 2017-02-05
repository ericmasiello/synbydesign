/* eslint-disable global-require, import/no-extraneous-dependencies */
if (process.env.NODE_ENV !== 'production') {
  require('babel-register');
  const hook = require('css-modules-require-hook');
  hook({
    generateScopedName: '[name]__[local]___[hash:base64:5]',
  });
}
/* eslint-enable global-require, import/no-extraneous-dependencies */
