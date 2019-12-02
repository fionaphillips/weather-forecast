module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'jpg'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^Common(.*)$': '<rootDir>/src/components/common$1',
    '^Pages(.*)$': '<rootDir>/src/Pages$1',
    '^Utilities(.*)$': '<rootDir>/src/Utilities$1',
    '^SetupTests(.*)$': '<rootDir>/src/setupTests',
    '^Actions(.*)$': '<rootDir>/src/store/actions',
    '^Constants(.*)$': '<rootDir>/src/components/constants',
    '^Themes(.*)$': '<rootDir>/src/styled',
    '\\.(jpg)$': '<rootDir>/assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>/assetsTransformer.js',
  },
  testMatch: ['<rootDir>/src/__tests__/**/*.js?(x)'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
