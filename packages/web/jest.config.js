/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  modulePaths: ['<rootDir>', '/home/some/other/path'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@components$': '<rootDir>/shared/components/',
    '^@assets$': '<rootDir>/shared/assets/',
  },
};
