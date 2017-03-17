module.exports = {
  extends: [
    'eslint-config-ericmasiello',
    'eslint-config-ericmasiello/flow',
    'eslint-config-ericmasiello/react',
  ],
  plugins: [
    'jest',
  ],
  env: {
    'jest/globals': true,
  },
  rules: {
    'flowtype/require-parameter-type': [
      2,
      {
        excludeArrowFunctions: true,
      },
    ],
    'flowtype/sort-keys': [
      2,
      'asc',
    ],
    'flowtype/space-after-type-colon': [
      2,
      'always',
      {
        allowLineBreak: false,
      },
    ],
    'flowtype/type-id-match': [
      2,
      /^Syn\$([A-Z][a-z0-9]*)+$/,
    ],
  },
};
