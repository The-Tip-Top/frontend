import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
    dir: './',
});


const config: Config = {
  coverageProvider: 'v8',
  // preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: true,
  // coverageDirectory: "coverage",
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
    '^.+\\.(js|jsx)$': 'babel-jest', 
    '(\\.ts$|query-string)': ['ts-jest', {}],
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(query-string)/)',
    // "node_modules/(?!(react-leaflet-custom-control)/)"
  ],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/(.*)$': '<rootDir>/$1',
  },
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};

export default createJestConfig(config);
