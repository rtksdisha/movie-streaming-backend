module.exports = {
  collectCoverageFrom: ["src/**/*.js*"],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 10,
    },
  },
};