module.exports = {
  moduleFileExtensions: ['js', 'json', 'jsx'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  testMatch: [
    '<rootDir>/**/*.test.(js|jsx)'
  ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!text-field-edit)'
  ],
  'setupFilesAfterEnv': ['<rootDir>/src/setupTests.js'],
};
