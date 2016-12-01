module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: [
    'flowtype',
  ],
  rules: {
    'import/prefer-default-export': 1,
    'react/jsx-filename-extension': 0,
  },
};
