/* eslint-disable import/no-extraneous-dependencies */
const ericmasiello = require('stylelint-config-ericmasiello');
const cssmodules = require('stylelint-config-css-modules');

module.exports = {
  extends: ['stylelint-config-ericmasiello', 'stylelint-config-css-modules'],
  rules: {
    'property-no-unknown': [
      true,
      {
        ignoreProperties: [...cssmodules.rules['property-no-unknown'][1].ignoreProperties],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          ...ericmasiello.rules['at-rule-no-unknown'][1].ignoreAtRules,
          ...cssmodules.rules['at-rule-no-unknown'][1].ignoreAtRules,
        ],
      },
    ],
  },
};
