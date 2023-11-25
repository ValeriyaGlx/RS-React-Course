const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '/(__tests__)/.*\\.test.(ts|tsx|js)$',
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
