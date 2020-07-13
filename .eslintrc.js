module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'react/prop-types': 0,
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'no-multi-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'no-trailing-spaces': 'error',
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    'eol-last': ['error', 'always'],
    'no-console': 'error',
    'no-dupe-keys': 'error',
    'switch-colon-spacing': 'error',
    curly: 'error',
    'no-else-return': 'error',
    'no-empty': 'error',
    'no-extra-semi': 'error',
    semi: [2, 'always'],
  },
};
