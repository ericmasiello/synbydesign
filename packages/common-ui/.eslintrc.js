const config = require('../../.eslintrc');

module.expots = {
  ...config,
  rules: {
    ...config.rules,
    'no-restricted-properties': [
      2,
      {
        property: 'defaultProps',
        message:
          'Specifying static properties such as defaultProps can break tree shaking. Use default parameter values instead. See http://es6-features.org/#DefaultParameterValues.',
      },
    ],
  },
};
