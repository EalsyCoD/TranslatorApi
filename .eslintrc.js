module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [ 'plugin:react/recommended', 'standard' ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [ 'react', '@typescript-eslint' ],
  rules: {
    '@typescript-eslint/no-use-before-define': 'off',
    'no-use-before-define': 'off',
    'comma-dangle': [ 'error', 'always-multiline' ],
    semi: [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'padded-blocks': 'off',
    'space-before-function-paren': 'off',
    'no-useless-constructor': 'off',
    'no-unused-vars': 'off',
    'max-len': [ 'error', { code: 120 } ],
    'no-useless-return': 'off',
    'dot-notation': 'off',
    'lines-between-class-members': 'off',
    camelcase: 'off',
  },
  globals: {
    React: true,
    JSX: true,
  },
};
