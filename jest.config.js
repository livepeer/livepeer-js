/* eslint-env node */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(test).ts?(x)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  reporters: [
    "default",
    ["jest-junit", { outputDirectory: "./tests/reports", outputName: "junit.xml" }]
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};