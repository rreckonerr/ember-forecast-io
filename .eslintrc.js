module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module'
  },
  extends: [
    'plugin:ember-suave/recommended'
  ],
  env: {
    'browser': true
  },
  rules: {
    'strict': 0,
    'ember-suave/require-access-in-comments': 0,
    'no-unused-vars': 'error',
    'no-dupe-keys': 'error'
  }
};
