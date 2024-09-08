import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  // preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: true,
  // coverageDirectory: "coverage",
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ["node_modules", "src"],
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
 
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',  // Use Babel for JavaScript files
    "(\\.ts$|query-string)":  ["ts-jest", {}]
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(query-string)/)' // Include specific packages if needed
    // "node_modules/(?!(react-leaflet-custom-control)/)"
  ],
  
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/(.*)$': '<rootDir>/$1', // This should match your paths in tsconfig.json
  },
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)