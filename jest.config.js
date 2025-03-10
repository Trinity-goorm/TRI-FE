const config = {
    moduleFileExtensions: [
        "js",
        "mjs",
        "cjs",
        "jsx",
        "ts",
        "tsx",
        "json",
        "node",
    ],
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(js|jsx)?$": "babel-jest",
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/$1",
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less)$": "<rootDir>/__mocks__/fileMock.js",
    },
    testMatch: [
        "**/src/**/*.(test|spec).js?(x)",
        "<rootDir>/**/*.test.(js|jsx|ts|tsx)",
        "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))",
    ],
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
    setupFilesAfterEnv: ["<rootDir>/jest.setupTests.js"],
};
export default config;