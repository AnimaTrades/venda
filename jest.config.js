const path = require('path');

module.exports = {
  verbose: true,
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './coverage',
        outputName: 'junit.xml',
        uniqueOutputName: 'false',
        ancestorSeparator: ' › ',
        usePathForSuiteName: 'true',
      },
    ],
  ],
  transformIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**'],
  coverageReporters: ['text', 'cobertura', 'lcov'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': path.resolve(
      __dirname,
      './'
    ),
  },
  modulePathIgnorePatterns: ['mocks/', 'EndToEnd', 'coverage', 'config', 'wdio.conf.js'],
};
