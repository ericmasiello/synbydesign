const config = require('eslint-config-react-app');

const rulesAsErrors = Object.keys(config.rules).reduce((acc, key) => {
  if (typeof config.rules[key] === 'string') {
    acc[key] = 'error';
  } else if (Array.isArray(config.rules[key]) && config.rules[key][0] === 'warn') {
    acc[key] = ['error', ...config.rules[key].slice(1)];
  } else {
    acc[key] = config.rules[key];
  }
  return acc;
}, {});

module.exports = {
  extends: 'react-app',
  plugins: ['cypress'],
  env: {
    'cypress/globals': true,
  },
  rules: {
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'error',
    'cypress/no-force': 'error',
    'cypress/no-async-tests': 'error',
    'cypress/no-pause': 'error',
    'no-unused-vars': 'error',
    ...rulesAsErrors,
    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '.eslintrc.js',
          'jest-preprocess.js',
          'src/setupTests.js',
          '**/*{.,_}{stories,story}.{js,jsx}',
          'cypress/**', // tape, common npm pattern
          'test/**', // tape, common npm pattern
          'tests/**', // also common npm pattern
          'spec/**', // mocha, rspec-like pattern
          '**/__tests__/**', // jest pattern
          '**/__mocks__/**', // jest pattern
          'test.{js,jsx}', // repos with a single test file
          'test-*.{js,jsx}', // repos with multiple top-level test files
          '**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
          '**/jest.config.js', // jest config
          '**/postcss.config.js', // postcss config
          '**/webpack.config.js', // webpack config
          '**/webpack.config.*.js', // webpack config
        ],
      },
    ],
  },
};
