module.exports = {
    env: {
        node: true,
        mocha: true,
        es6: true,
        browser: true,
    },
    ignorePatterns: ["node_modules", "dist", "bin", ".eslintrc.js"],
    extends: ["standard"],
    parser: "@babel/eslint-parser",
    parserOptions: {
        ecmaVersion: 2021,
        requireConfigFile: false
    },
    plugins: ["standard"],
    rules: {
        "no-console": "off",
    },
    root: true,
};

