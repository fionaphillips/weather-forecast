module.exports = {
  moduleFileExtensions: ['js', 'jsx'],
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
  },
  testMatch: ['<rootDir>/src/__tests__/**/*.js?(x)'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};

/* 
        Common: path.resolve(__dirname, 'src/components/common'),
      Pages: path.resolve(__dirname, 'src/components/Pages'),
      Utilities: path.resolve(__dirname, 'src/Utilities'),
      Constants: path.resolve(__dirname, 'src/components/constants'),
      Services: path.resolve(__dirname, 'src/Services'),
      Reducers: path.resolve(__dirname, 'src/store/reducers'),
      Actions: path.resolve(__dirname, 'src/store/actions'),
  */
