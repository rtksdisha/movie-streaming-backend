module.exports = {
  collectCoverageFrom: ["src/**/*.js*"],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 10,
    },
  },
};
