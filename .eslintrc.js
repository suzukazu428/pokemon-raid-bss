module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    "eslint:recommended",
    'plugin:prettier/recommended'
  ],
  // add your custom rules here
  rules: {
    'prefer-const': 2,
    'no-console': 0,
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "es5"
      }
    ]
  }
}
