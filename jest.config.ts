const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
  testRegex: '/(__tests__)/.*\\.test.(ts|tsx|js)$',
});

const customJestConfig = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
