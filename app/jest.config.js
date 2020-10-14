// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  globals: {
    // work around: https://github.com/kulshekhar/ts-jest/issues/748#issuecomment-423528659
    "ts-jest": {
      diagnostics: {
        ignoreCodes: [151001]
      }
    }
  },
  coverageDirectory: "coverage",

  coveragePathIgnorePatterns: ["/node_modules/"],

  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "vue"],

  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.(t|j)sx?$": [
      "babel-jest",
      {
        presets: [
          [
            "@babel/preset-env",
            {
              targets: {
                node: true
              }
            }
          ],
          "@babel/preset-typescript"
        ],
        plugins: ["@vue/babel-plugin-jsx"]
      }
    ]
  }
};
