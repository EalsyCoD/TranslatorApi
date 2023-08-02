import type { Config } from 'jest'

const config: Config = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  verbose: true,
  moduleDirectories: [ 'node_modules', 'src' ],
  moduleNameMapper: {
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@store/(.*)': '<rootDir>/src/store/$1',
    '@interfaces/(.*)': '<rootDir>/src/interfaces/$1',
    '@api/(.*)': '<rootDir>/src/api/$1',
    '@shared/(.*)': '<rootDir>/src/shared/$1',
    '@helper/(.*)': '<rootDir>/src/helper/$1',
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@models/(.*)': '<rootDir>/src/store/models/$1',
    '@features/(.*)': '<rootDir>/src/features/$1',
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@saga/(.*)': '<rootDir>/src/saga/$1',
    '@styles/(.*)': '<rootDir>/src/styles/$1',
    '@assets/(.*)': '<rootDir>/src/assets/$1',
  },
  transform: {
    '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
};

export default config;
