export default {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/presentation/protocols/**'
  ],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  } 
};
