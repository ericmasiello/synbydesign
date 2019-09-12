module.exports = {
  coveragePathIgnorePatterns: ['/node_modules/', '/test/'],
  setupFiles: ['<rootDir>/test/enzyme.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  watchPathIgnorePatterns: ['<rootDir>/.next', '<rootDir>/build'],
};
