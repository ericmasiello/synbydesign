module.exports = {
  testPathIgnorePatterns: [
    'examples',
    '__tests__/util',
  ],
  collectCoverageFrom: [
    '!src/components/**/*.story.js',
    'src/components/**/*.js',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
  },
};
