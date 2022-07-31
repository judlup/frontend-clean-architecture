const nextJest = require("next/jest")

const createJestConfig = nextJest({
  dir: "./",
})

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/Infrastructure/(.*)$": "<rootDir>/src/Infrastructure/$1",
    "^@/Application/(.*)$": "<rootDir>/src/Application/$1",
    "^@/Domain/(.*)$": "<rootDir>/src/Domain/$1",
    "^@/pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@Test(.*)$": "<rootDir>/src/Test$1",
  },
  testEnvironment: "jest-environment-jsdom",
}

module.exports = createJestConfig(customJestConfig)
