/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@components$': '<rootDir>/shared/components/',
    '^@assets$': '<rootDir>/shared/assets/',
  },
};
