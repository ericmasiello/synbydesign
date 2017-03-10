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
};
