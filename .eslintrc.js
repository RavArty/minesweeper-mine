module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier', // Enables eslint-config-prettier
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: '12',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }],
    'react/prop-types': 0,
  },
  overrides: [
    {
      files: ['webpack.config.js'],
      rules: {
        '@typescript-eslint/no-var-requires': ['off'],
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
